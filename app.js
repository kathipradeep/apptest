const https = require('https');
const express=require('express');
const app=express();
var router=express.Router();
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json')
var bodyParser=require('body-parser');
var cors=require('cors');
const fs=require('fs');
var logger = require('./logger');
const dialogFlowApp = require("./DialogflowApp");
const homeControlApp = require("./homeControl");
//const util = require('util');
const {AuthenticationClient} = require('auth0');
var ifffttHelper = require('./helpers/iftttHelper');

const auth0 = new AuthenticationClient({
  'clientId': 'KsEu2l72P4sRM8SYdWv4BiV6KwdGGH3r',
  'domain': 'dev-r3f0ww0v.auth0.com'
});

// Certificates for Dev 
const cert = fs.readFileSync('C:/keys/certs/certificate.crt');
const ca = fs.readFileSync('C:/keys/certs/bundle.crt');
const key = fs.readFileSync('C:/keys/certs/privateKey.key'); 

/*
// Certificates for UAT
const cert = fs.readFileSync('c:/keys/ssl/c200b8b9b216592f.crt');
const ca = fs.readFileSync('c:/keys/ssl/gd_bundle-g2-g1.crt');
const key = fs.readFileSync('c:/keys/ssl/heleo_app.key'); */

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
app.use(bodyParser.json())

var models = require('./db/models');

models.sequelize.sync().then(() => {
    console.log('Nice,Database looks fine')
}).catch(err => {
    console.log(err, 'Something went wrong with database update !')
})

var CHANNEL_KEY = 'zU3FtkUYurR51Uk66eSF7RcK1UFbQNwd70-npCBGUm7cjXc21WtdXlLznsY5Xal9';

require('./routes/statusCheckRoute')(app, router);
require('./routes/authRoute')(app, router);
require('./routes/deviceRoute')(app,router);
require('./routes/relayRoute')(app,router);
require('./routes/userRoute')(app,router);
require('./routes/locationRoute')(app,router);
require('./routes/scheduleRoute')(app,router);
require('./routes/forgotPasswordRoute')(app, router);
require('./routes/timerRoute')(app, router);
require('./routes/fcmRoute')(app, router);


var options = {
    customCss: '.swagger-ui .topbar { display: none }'
  };
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));

const httpsOptions = {cert, ca, key};

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('Server is Running');
  res.end();
})

app.get('/ifttt/v1/status', (req, res) => {
  var channelKey = req.header("IFTTT-Channel-Key");
  if(CHANNEL_KEY === channelKey) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('IFTTT');
    res.end();
  }
  else
  {
    res.statusCode = 401;
    res.end();
  }

}); 

app.post('/ifttt/v1/test/setup', (req, res) => {
  var channelKey = req.header("IFTTT-Channel-Key");
  if(CHANNEL_KEY === channelKey) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
     data:  { 
       "accessToken": "hyEFtABiIswHFkC5c-_44vgOCVTee_NW", 
       "samples": { 
         "actions": { 
           "switchON": { "device_name": "2008_16009_1", "status": 1 },
           "switchOFF": { "device_name": "2008_16009_1", "status": 1 },
           "switchONWithDimmerHigh": { "device_name": "2008_16009_1", "status": 1 },
           "switchONWithDimmerLow": { "device_name": "2008_16009_1", "status": 1 },
           "switchONWithDimmerMedium": { "device_name": "2008_16009_1", "status": 1 }
     }
    }
   }
    });
    res.end();
  }
  else
  {
    res.statusCode = 401;
    res.end();
  }

}); 

app.get('/ifttt/v1/user/info', async (req, res) => {
  var token = req.headers.authorization.split(" ")[1];
  if(token === 'INVALID')
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
  else
  {
    var userInfo = await auth0.getProfile(token);
    var {email, nickname} = await auth0.getProfile(token);
    var userInfoRes = { 
      name: nickname,
      id: email
    };
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({
        data:  userInfoRes
       });
      res.end();
  }


}); 

app.post('/ifttt/v1/actions/switchON', async (req, res) => {
  var token = req.headers.authorization.split(" ")[1];
  if(token === 'INVALID')
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
  else
  {
    var actionFields = req.body.actionFields;
    if(actionFields)
    {
      var deviceName = actionFields.device_name;
      if(deviceName)
      {
        var {email, nickname} = await auth0.getProfile(token);
        var splitResult = deviceName.split('_');
        var macAddress = await ifffttHelper.getMacAddress(splitResult[0]);
        var switchNo = splitResult[2];
        var relayId = splitResult[1];
        await ifffttHelper.updateRelayStatusAndSendCommand(relayId,macAddress,switchNo,1);

        var results = { 
          id: 'email'
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  [results]
         });
        res.end();
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({ errors: [
          {message: 'Missing Action Fields'}
        ]});
        res.end();
      }
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).json({ errors: [
        {message: 'Missing Action Fields'}
      ]});
      res.end();
    }
  } 
});

app.post('/ifttt/v1/actions/switchOFF', async (req, res) => {
  var token = req.headers.authorization.split(" ")[1];
  if(token === 'INVALID')
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
  else
  {
    var actionFields = req.body.actionFields;
    if(actionFields)
    {
      var deviceName = actionFields.device_name;
      if(deviceName)
      {
        var {email, nickname} = await auth0.getProfile(token);
        var splitResult = deviceName.split('_');
        var macAddress = await ifffttHelper.getMacAddress(splitResult[0]);
        var switchNo = splitResult[2];
        var relayId = splitResult[1];
        await ifffttHelper.updateRelayStatusAndSendCommand(relayId,macAddress,switchNo,0);

        var results = { 
          id: 'email'
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  [results]
         });
        res.end();
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({ errors: [
          {message: 'Missing Action Fields'}
        ]});
        res.end();
      }
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).json({ errors: [
        {message: 'Missing Action Fields'}
      ]});
      res.end();
    }
  } 
});

app.post('/ifttt/v1/actions/switchONWithDimmerHigh', async (req, res) => {
  var token = req.headers.authorization.split(" ")[1];
  if(token === 'INVALID')
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
  else
  {
    var actionFields = req.body.actionFields;
    if(actionFields)
    {
      var deviceName = actionFields.device_name;
      if(deviceName)
      {
        var {email, nickname} = await auth0.getProfile(token);
        var splitResult = deviceName.split('_');
        var macAddress = await ifffttHelper.getMacAddress(splitResult[0]);
        var relayId = splitResult[1];
        var switch7RelayID = relayId -1;
        await ifffttHelper.updateRelayStatusAndSendCommand(switch7RelayID,macAddress,"7",1);
        await ifffttHelper.updateRelayStatusAndSendCommand(relayId,macAddress,"8",2);

        var results = { 
          id: 'email'
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  [results]
         });
        res.end();
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({ errors: [
          {message: 'Missing Action Fields'}
        ]});
        res.end();
      }
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).json({ errors: [
        {message: 'Missing Action Fields'}
      ]});
      res.end();
    }
  } 
});

app.post('/ifttt/v1/actions/switchONWithDimmerLow', async (req, res) => {
  var token = req.headers.authorization.split(" ")[1];
  if(token === 'INVALID')
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
  else
  {
    var actionFields = req.body.actionFields;
    if(actionFields)
    {
      var deviceName = actionFields.device_name;
      if(deviceName)
      {
        var {email, nickname} = await auth0.getProfile(token);
        var splitResult = deviceName.split('_');
        var macAddress = await ifffttHelper.getMacAddress(splitResult[0]);
        var relayId = splitResult[1];
        var switch7RelayID = relayId -1;
        await ifffttHelper.updateRelayStatusAndSendCommand(switch7RelayID,macAddress,"7",1);
        await ifffttHelper.updateRelayStatusAndSendCommand(relayId,macAddress,"8",0);

        var results = { 
          id: 'email'
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  [results]
         });
        res.end();
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({ errors: [
          {message: 'Missing Action Fields'}
        ]});
        res.end();
      }
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).json({ errors: [
        {message: 'Missing Action Fields'}
      ]});
      res.end();
    }
  } 
});

app.post('/ifttt/v1/actions/switchONWithDimmerMedium', async (req, res) => {
  var token = req.headers.authorization.split(" ")[1];
  if(token === 'INVALID')
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
  else
  {
    var actionFields = req.body.actionFields;
    if(actionFields)
    {
      var deviceName = actionFields.device_name;
      if(deviceName)
      {
        var {email, nickname} = await auth0.getProfile(token);
        var splitResult = deviceName.split('_');
        var macAddress = await ifffttHelper.getMacAddress(splitResult[0]);
        var relayId = splitResult[1];
        var switch7RelayID = relayId -1;
        await ifffttHelper.updateRelayStatusAndSendCommand(switch7RelayID,macAddress,"7",1);
        await ifffttHelper.updateRelayStatusAndSendCommand(relayId,macAddress,"8",1);

        var results = { 
          id: 'email'
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  [results]
         });
        res.end();
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({ errors: [
          {message: 'Missing Action Fields'}
        ]});
        res.end();
      }
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).json({ errors: [
        {message: 'Missing Action Fields'}
      ]});
      res.end();
    }
  } 
});


app.post('/ifttt/v1/actions/switchON/fields/device_name/options', async (req, res) => {
  var deviceNameArray = [];
  var token = req.headers.authorization.split(" ")[1];
  var {email} = await auth0.getProfile(token);
  if(email)
  {
    var user = await ifffttHelper.getUser(email);
    if(user)
    {
      var devices = await ifffttHelper.getDevices(user.userId);
      if(devices)
      {
        devices.forEach(device => {
          var deviceName = device.deviceName;
          var deviceId = device.deviceId; 
          var relays = device.dataValues.h_relays;
          relays.forEach(relay => {
            if(!relay.isDimmer) {
            var arrayObject = {
              label: deviceName + "_" + relay.switchName,
              value: deviceId + '_' + relay.relayId + '_' + relay.switchNo
            }
            deviceNameArray.push(arrayObject);
          }
          })
        });

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  deviceNameArray
         });
        res.end();
      }
      
      
    }

  }
  else
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
  

});

app.post('/ifttt/v1/actions/switchOFF/fields/device_name/options', async (req, res) => {
  var deviceNameArray = [];
  var token = req.headers.authorization.split(" ")[1];
  var {email} = await auth0.getProfile(token);
  if(email)
  {
    var user = await ifffttHelper.getUser(email);
    if(user)
    {
      var devices = await ifffttHelper.getDevices(user.userId);
      if(devices)
      {
        devices.forEach(device => {
          var deviceName = device.deviceName;
          var deviceId = device.deviceId; 
          var relays = device.dataValues.h_relays;
          relays.forEach(relay => {
            if(!relay.isDimmer) {
            var arrayObject = {
              label: deviceName + "_" + relay.switchName,
              value: deviceId + '_' + relay.relayId + '_' + relay.switchNo
            }
            deviceNameArray.push(arrayObject);
          }
          })
        });

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  deviceNameArray
         });
        res.end();
      }
    }
 }
  else
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
});

app.post('/ifttt/v1/actions/switchONWithDimmerHigh/fields/device_name/options', async (req, res) => {
  var deviceNameArray = [];
  var token = req.headers.authorization.split(" ")[1];
  var {email} = await auth0.getProfile(token);
  if(email)
  {
    var user = await ifffttHelper.getUser(email);
    if(user)
    {
      var devices = await ifffttHelper.getDevices(user.userId);
      if(devices)
      {
        devices.forEach(device => {
          var deviceName = device.deviceName;
          var deviceId = device.deviceId; 
          var relays = device.dataValues.h_relays;
          relays.forEach(relay => {
            if(relay.isDimmer) {
            var arrayObject = {
              label: deviceName,
              value: deviceId + '_' + relay.relayId + '_' + relay.switchNo
            }
            deviceNameArray.push(arrayObject);
          }
          })
        });

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  deviceNameArray
         });
        res.end();
      }
    }
 }
  else
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
});

app.post('/ifttt/v1/actions/switchONWithDimmerLow/fields/device_name/options', async (req, res) => {
  var deviceNameArray = [];
  var token = req.headers.authorization.split(" ")[1];
  var {email} = await auth0.getProfile(token);
  if(email)
  {
    var user = await ifffttHelper.getUser(email);
    if(user)
    {
      var devices = await ifffttHelper.getDevices(user.userId);
      if(devices)
      {
        devices.forEach(device => {
          var deviceName = device.deviceName;
          var deviceId = device.deviceId; 
          var relays = device.dataValues.h_relays;
          relays.forEach(relay => {
            if(relay.isDimmer) {  
            var arrayObject = {
              label: deviceName,
              value: deviceId + '_' + relay.relayId + '_' + relay.switchNo
            }
            deviceNameArray.push(arrayObject);
          }
          })
        });

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  deviceNameArray
         });
        res.end();
      }
    }
 }
  else
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
});

app.post('/ifttt/v1/actions/switchONWithDimmerMedium/fields/device_name/options', async (req, res) => {
  var deviceNameArray = [];
  var token = req.headers.authorization.split(" ")[1];
  var {email} = await auth0.getProfile(token);
  if(email)
  {
    var user = await ifffttHelper.getUser(email);
    if(user)
    {
      var devices = await ifffttHelper.getDevices(user.userId);
      if(devices)
      {
        devices.forEach(device => {
          var deviceName = device.deviceName;
          var deviceId = device.deviceId; 
          var relays = device.dataValues.h_relays;
          relays.forEach(relay => {
            if(relay.isDimmer) {
            var arrayObject = {
              label: deviceName,
              value: deviceId + '_' + relay.relayId + '_' + relay.switchNo
            }
            deviceNameArray.push(arrayObject);
          }
          })
        });

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          data:  deviceNameArray
         });
        res.end();
      }
    }
 }
  else
  {
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ errors: [
      {message: 'Invalid Access Token'}
    ]});
    res.end();
  }
});

//app.post("/dialogFlow", dialogFlowApp);
app.post("/homeControl", homeControlApp);

const httpsServer = https.createServer(httpsOptions, app);
httpsServer.listen(80);  

/*app.listen(process.env.PORT || {API_PORT},()=>{
    console.log('Server started !')
});*/


module.exports = app;