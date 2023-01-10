'use strict';
const {smarthome} = require('actions-on-google');
var models = require("./db/models/index");
const redisClient = require('./helpers/redisClient');
const config = require("./config/config");
//const {google} = require('googleapis');
//const util = require('util');

const {AuthenticationClient} = require('auth0');

const auth0 = new AuthenticationClient({
  'clientId': 's7cQsNuHKV9AJCotfDAZyhc2Wn5koW1F',
  'domain': 'dev-r3f0ww0v.auth0.com'
});

const app = smarthome({
  //debug: true,
});

app.onSync(async (body, headers) => {
  var email = await getUserEmail(headers);
  var userDevices = [];
  var user = await findUser(email);
  var devices = await findAllDevices(user.userId);
  if(devices) 
  {
    devices.forEach(device => {
      var relays = device.dataValues.h_relays;
      relays.forEach(relay => {
        if(relay.isDimmer) {
          var userDevice = {
            id: relay.relayId,
            type: 'action.devices.types.FAN',
            traits: [
              'action.devices.traits.FanSpeed'
            ],
            name: {
              name: 'SPEED',
            },
            willReportState: true,
            attributes: {
              availableFanSpeeds: {
                speeds: 
                [
                    {
                      speed_name: 'Low',
                      speed_values: [{ speed_synonym: ['low', 'slow'], lang: 'en'}]
                    },
                    {
                      speed_name: 'Medium',
                      speed_values: [{ speed_synonym: ['medium'], lang: 'en'}]
                    },			
                    {
                      speed_name: 'High',
                      speed_values: [{ speed_synonym: ['high'], lang: 'en'}]
                    }
                ],
                ordered: true,
              },
              reversible: true,
            },
            roomHint: device.dataValues.deviceName
          }
          userDevices.push(userDevice);
        }
        else
        {
          var userDevice = {
            id: relay.relayId,
            type: 'action.devices.types.SWITCH',
            traits: [
              'action.devices.traits.OnOff'
            ],
            name: {
              name: relay.switchName,
            },
            willReportState: true,
            roomHint: device.dataValues.deviceName
          }
          userDevices.push(userDevice);
        }

      });
    });
    return {
      requestId: body.requestId,
      payload: {
        agentUserId: user.userId,
        devices: userDevices
      }
    };  
  }
  else {
    return {}
  }
});

const queryDevice = async (relayId) => {
  var relay = await findRelay(relayId);
  var state;
  if(relay.isDimmer)
  {
    if(relay.dataValues.switchStatus = 0) {
      state = {speed: 'low'};
    } else if(relay.dataValues.switchStatus = 1) {
      state = {speed: 'medium'};
    } else if(relay.dataValues.switchStatus = 2) {
      state = {speed: 'high'};
    }
  }
  else
  {
    if(relay.dataValues.switchStatus = 1) {
      state = {on: true};
    } else {
      state = {on: false};
    }
  }
  return state;
};

app.onQuery(async (body,headers) => {
  var email = await getUserEmail(headers);
  const {requestId} = body;
  const payload = {
    devices: {},
  };
  const queryPromises = [];
  const intent = body.inputs[0];
  for (const device of intent.payload.devices) {
    const deviceId = device.id;
    queryPromises.push(queryDevice(deviceId).then((data) => {
        // Add response to device payload
        payload.devices[deviceId] = data;
      }
    ));
  }
  // Wait for all promises to resolve
  await Promise.all(queryPromises)
  return {
    requestId: requestId,
    payload: payload,
  };
});

 const updateDevice = async (execution,relayId) => {
  const {params,command} = execution;
  var switchStatus = 0;
  let state;
  switch (command) {
    case 'action.devices.commands.OnOff':
      if(params.on) {
        switchStatus = 1; 
        state = {on: params.on};
        break;
    } else {
        switchStatus = 0;
        state = {on: params.on};
        break; 
    } 
   case 'action.devices.commands.SetFanSpeed':
    if(params.fanSpeed == 'Low') {
      switchStatus = 0; 
      state = {speed: 'low'};
      break;
    } else if(params.fanSpeed == 'Medium') {
    switchStatus = 1; 
    state = {speed: 'medium'};
    break;
   } else if(params.fanSpeed == 'High') {
    switchStatus = 2; 
    state = {speed: 'high'};
    break;
  }  

  }
  var relay = await findRelay(relayId);
  if(relay) {
    var macAddress = relay.dataValues.h_device.dataValues.macAddress;
    var switchNo = relay.dataValues.switchNo;
    relay.switchStatus = switchStatus;
    await updateRelayStatusAndSendCommand(relayId, macAddress, switchNo, switchStatus);
  }
  return state;
};

app.onExecute(async (body,headers) => {
  var email = await getUserEmail(headers);
  const {requestId} = body;
  // Execution results are grouped by status
  const result = {
    ids: [],
    status: 'SUCCESS',
    states: {
      online: true,
    },
  };
  const executePromises = [];
  const intent = body.inputs[0];
  for (const command of intent.payload.commands) {
    for (const device of command.devices) {
      for (const execution of command.execution) {
        executePromises.push(updateDevice(execution,device.id).then(async (data) => {
              result.ids.push(device.id);
              Object.assign(result.states, data);
              //var msg = await callCommandOnDevice("praveen.gautam@neocepts.co.in", "Hall", switchName, switchStatus);
            })
            .catch(() => console.error(`Unable to update ${device.id}`))
        );
      }
    }
  }
  await Promise.all(executePromises)
  return {
    requestId: requestId,
    payload: {
      commands: [result],
    },
  };
});


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

function findRelay(relayId)
{
  var relay = models.h_relays.findOne({ where: { relayId: relayId }, include: [ { model: models.h_device } ] });
  return relay;
};

function findAllDevices(userId)
{
  var device = models.h_device.findAll({ where: { userId: userId }, include: [ { model: models.h_relays } ] });
  return device;
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

async function getUserEmail(headers) {
var token = headers.authorization.split(" ")[1];
var {email} = await auth0.getProfile(token);
return email;
}


module.exports = app;

