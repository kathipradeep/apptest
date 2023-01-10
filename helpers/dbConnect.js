var models = require("../db/models/index");
var pushNotification = require("./pushNotification");

module.exports = {
  logMessages(parsedData) {
    models.h_messageLog.create({
        command: parsedData.command,
        messageId: parsedData.messageId,
        message: parsedData.messageBody
      })
      .then(result => {
        //console.log("Record Created : " + JSON.stringify(result));
      });
    return true;
  },

  deviceConnectedToServer(deviceMACAddress) {

    const device = models.h_device.findOne({where: {macAddress: deviceMACAddress }, 
      include: [ { model: models.h_relays }] }).then(device => {
        if (!device) {
          console.log('Error fetching devices');
      }
      device.isConnected = true;
      device.save().then(device => {
        var switchInfo = {};
        var relays = device.dataValues.h_relays;
        relays.forEach(relay => {
          switchInfo[relay.switchNo] = relay.switchStatus;
        });
        console.log(switchInfo); 
        return switchInfo;
      });

      });
    
  },
  updateSingleSwitchStatus(socketMacAddress,parsedData)
  {
    var switchInfo = {};
    var switchName = ''; 
    models.h_device.findOne({ where: { macAddress: socketMacAddress} , include: [
      {
        model: models.h_relays
      }
    ] } ).then( device => {
      var deviceName = device.dataValues.deviceName;
      console.log("Device Name :" + deviceName);
      
      var relays = device.dataValues.h_relays;
      relays.forEach(relay => {

        switchInfo[relay.switchNo] = +relay.switchStatus;
          if(relay.switchNo === +parsedData.switchNo) {
            switchInfo[relay.switchNo] = +parsedData.switchStatus;
            switchName = relay.switchName;
            relay.update( {
              switchStatus: parsedData.switchStatus
            }).then(result => {
              console.log("Relay Updated Successfully");
              models.h_fcm.findAll({raw: true, where:{userId:device.dataValues.userId}, attributes: ['fcmKey'],}).then(fcmTokens=>{
              var fcmArray = [];
              if(fcmTokens) {
                fcmTokens.forEach(fcmToken => {
                  fcmArray.push(fcmToken.fcmKey);
                });
  
                if(fcmArray.length > 0) {
                  let pData = pushNotification.genData(deviceName, switchName, parsedData,fcmArray);
                  pushNotification.send(pData);
                }
              }
            })
              
            }).catch( error => {
              console.log("An Error Occured While updation : " + error);
            });
          }
      })
    })
    return switchInfo;
  },
  updateAllSwitchStatus(socketMacAddress,switchInfo)
  {
    models.h_device.findOne({ where: { macAddress: socketMacAddress} , include: [{ model: models.h_relays } ]}).then( device => {
      console.log("Device Name :" + device.dataValues.deviceName);
      var relays = device.dataValues.h_relays;
      relays.forEach(relay => {
        var keys = Object.keys(switchInfo);
        keys.forEach(element => {
           if(relay.switchNo === +element && relay.switchStatus != switchInfo[element]) 
          {
            relay.update({ switchStatus: switchInfo[element]}).then(result => {
              console.log("Relay Updated Successfully");
            }).catch( error => {
              console.log("An Error Occured While updation : " + error);
            });

          }
      })
    })
  })
    return true;
  }
}
