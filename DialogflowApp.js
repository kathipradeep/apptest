var models = require("./db/models/index");
const redisClient = require('./helpers/redisClient');
const config = require("./config/config");

const { 
   dialogflow,
   SignIn
 } = require("actions-on-google");

// Instantiate the Dialogflow client.
const app = dialogflow({ 
   clientId: '184471669414-oltvsg3iakd8ksvq3bmar98c2h4hegtb.apps.googleusercontent.com',
   debug: false });

app.intent('Default Welcome Intent', (conv) => {
  conv.ask(new SignIn('To get your account details'));
});   

app.intent('actions_intent_SIGN_IN', (conv, params, signin) => {
  if (signin.status === 'OK') {
    const payload = conv.user.profile.payload;
    conv.user.storage.email = payload.email;
    conv.user.storage.userName = payload.name;
    conv.ask(`Thanks, ${conv.user.storage.userName}. What Device / Switch you want to operate?`);
  } else {
    conv.close(`Sorry! You Need to Sign In to Continue`);
  }
})

app.intent('switch operation', async (conv, params) => {
   let deviceName = params.devicename;
   let switchName = params.switchname;
   let switchStatus = params.switchstatus;
    if (conv.user.storage.email) {
      if(switchStatus.toLowerCase() === 'on' || switchStatus.toLowerCase() === 'off') {
      if(switchStatus.toLowerCase() === 'on')
      {
        switchStatus = '1'
      } else if (switchStatus.toLowerCase() === 'off')
      {
        switchStatus = '0'
      } 
     var msg = await callCommandOnDevice(conv.user.storage.email, deviceName, switchName, switchStatus);
     conv.ask(msg + "." + 'Say Cancel / Close / Finish / Stop to end this conversation or Continue to operate the Devices?');
   } else {
    conv.ask('Invalid Status' + "." + 'Say Cancel / Close / Finish / Stop to end this conversation or Continue to operate the Devices?');
   }
  }  
 });

app.intent('cancel_Intent', (conv, params) => {
  conv.close(`Goodbye! See you next time.`);
 });  

app.intent('dimmer operation', async (conv, params) => {
  let deviceName = params.devicename;
  let dimmerValue = params.dimmer;
  //var switchStatus = 0;
   if (conv.user.storage.email) {
     if(dimmerValue.toLowerCase() === 'low' || dimmerValue.toLowerCase() === 'medium' || dimmerValue.toLowerCase() === 'high') {
      if(dimmerValue.toLowerCase() === 'low')
      {
        switchStatus = '0'
      } else if (dimmerValue.toLowerCase() === 'medium')
      {
        switchStatus = '1'
      } else if (dimmerValue.toLowerCase() === 'high')
      {
        switchStatus = '2'
      }  
    var msg = await callCommandOnDevice(conv.user.storage.email, deviceName, "switch 8", switchStatus);
    conv.ask(msg + "." + 'Say Cancel / Close / Finish / Stop to end this conversation or Continue to operate the Devices?');
     } else {
      conv.ask('Invalid Status' + "." + 'Say Cancel / Close / Finish / Stop to end this conversation or Continue to operate the Devices?');
     }

  }  
}); 

app.intent('actions_intent_NO_INPUT', (conv) => {
  const repromptCount = parseInt(conv.arguments.get('REPROMPT_COUNT'));
  if (repromptCount === 0) {
    conv.ask('What Device / Switch you want to operate?');
  } else if (repromptCount === 1) {
    conv.ask(`What Device / Switch you want to operate?`);
  } else if (conv.arguments.get('IS_FINAL_REPROMPT')) {
    conv.close(`Sorry we're having trouble. Let's ` +
      `try this again later. Goodbye.`);
  }
});

async function callCommandOnDevice(userName, deviceName, switchName, switchStatus)
{
  var user = await findUser(userName);
  if(user) {
    var device = await findDevice(user.userId, deviceName);
    if(device) {
      var retMsg = await findDetailsAndSendCommand(device, switchName, switchStatus);
      return retMsg;
    } else {
      return "Device Not Found";
    }
  } else {
    return "User Not Found";
  }
}

function findUser(userName)
{
  var user = models.h_user.findOne({ where: { emailId: userName }, raw: true });
  return user;
};

function findDevice(userId, deviceName)
{
  var device = models.h_device.findOne({ where: { userId: userId, deviceName: deviceName }, include: [ { model: models.h_relays } ] });
  return device;
};

function findDetailsAndSendCommand(device, switchName, switchStatus) {
  var macAddress = device.dataValues.macAddress;
  var relays = device.dataValues.h_relays;
  var relayFound = false;
  if(relays)
  {
    relays.forEach(async relay => {
      if(relay.switchName === switchName)
      {
      relayFound = true;
      var switchNo = relay.switchNo;
      await updateRelayStatusAndSendCommand(relay.relayId, macAddress, switchNo, switchStatus);
    }
    });
    if(relayFound) 
    {
      return "Action Completed";
    } else {
      return "Switch Not Found";
    }
  }
  else
  {
    return "No Switch Found";
  }
};

function updateRelayStatusAndSendCommand(relayId, macAddress, switchNo, switchStatus) {
  models.h_relays.update( { switchStatus: switchStatus }, { where: { relayId: relayId } } ).then( updatedRedcords => {
    if (updatedRedcords == 1) {
      var message = {
        macAddress :macAddress,
        switchNo : switchNo,
        status: switchStatus
        }
        redisClient.getClientInstance().publish(config.SUBSCRIPTION_QUEUE,JSON.stringify(message));
     }
  });
  return;
};


module.exports = app;
