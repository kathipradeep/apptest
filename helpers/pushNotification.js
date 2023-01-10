const https = require('https');
const config = require('../config/config');
var models = require("../db/models/index");

var genData = (deviceName,  switchName, parsedData, fcmArray) => {
    var status;
     if(parsedData.switchStatus == 0) {
        status = "OFF";
     }
     if(parsedData.switchStatus == 1) {
        status = "ON";
     }  
    let pnotificationData = {
        "notification":{
          "title":"Heleo Notification",
          "body": deviceName + " " + switchName + " turned " + status ,
          "sound":"default",
          "click_action":"FCM_PLUGIN_ACTIVITY",
          "icon":"fcm_push_icon"
        },
          'registration_ids': fcmArray,        
          "priority":"high",
          "restricted_package_name":""
      }
     return pnotificationData;
  };

  var send = (pnotificationData) => {
    var FCM_APIKEY = config.FCM_APIKEY;
    var options = {
        host: 'fcm.googleapis.com',
        port: 443,
        path: '/fcm/send',
        method: 'POST',
        // authentication headers
        headers: {
           'Authorization': 'key=' + FCM_APIKEY,
           'Content-Type': 'application/json'
        }   
     };

     request = https.request(options, function(res){
        var body = "";
        res.on('data', function(data) {
           body += data;
        });
        res.on('end', function() {
         //here we have the full response, html or json object
           console.log(body);
        })
        res.on('error', function(e) {
           console.log("Got error: " + e.message);
        });
         });
         request.write(JSON.stringify(pnotificationData));
        request.end();
     };

     var notifyAppChange = (msgObj) => {
      var switchName = '';  
      msgObj.switchStatus = msgObj.status;
      models.h_device.findOne({where:{macAddress:msgObj.macAddress}, include: [{ model: models.h_relays }] }).then(device=>{ 
         //console.log(device);
         var deviceName = device.dataValues.deviceName;
         var relays = device.dataValues.h_relays;
         relays.forEach(relay => {
            if(relay.switchNo === +msgObj.switchNo) {
               switchName = relay.switchName;
            }
         });
         models.h_fcm.findAll({raw: true, where:{userId:device.userId}, attributes: ['fcmKey'],}).then(fcmTokens=>{
            if(fcmTokens.length > 1) {
               var fcmArray = [];
               if(fcmTokens) {
                 fcmTokens.forEach(fcmToken => {
                   fcmArray.push(fcmToken.fcmKey);
                 });
   
                 if(fcmArray.length > 0) {
                   let pData = genData(deviceName, switchName, msgObj, fcmArray);
                   console.log(pData);
                   send(pData);
                 }
               }
            }
 
      });
    });
   }

     module.exports = {
      genData,
      send,
      notifyAppChange
};
