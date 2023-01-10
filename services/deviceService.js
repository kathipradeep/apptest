var models = require("../db/models/index");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");

module.exports = {
  async isConnected(userId,params,callback){
    await models.h_device.update( {updatedByTCPServer: false}, { where: { macAddress: params.macAddress } });
    var isConnected = await models.h_device.findOne({where: {userId:userId , macAddress:params.macAddress, isConnected:true}});
      if(isConnected==null){
        logger.error(MESSAGES.DEVICE_NOT_CONNECTED);
        return callback( { httpCode: HttpStatus.NOT_FOUND, message: MESSAGES.DEVICE_NOT_CONNECTED }, null ); 
      }else{
        return callback(null, isConnected);
      }
  },

  async addDevice(body, userId, callback) {
    var device = await models.h_device.findOne({ where: { macAddress: body.macAddress } }); 
    if(device == null) {
      //Code for Add Device Here
      var deviceMaster = await models.h_deviceMaster.findOne({ where: { deviceMACAddress: body.macAddress } }); 
        if (deviceMaster == null) {
          logger.error(MESSAGES.MACADDRESS_VALIDATION);
          return callback( { httpCode: HttpStatus.NOT_FOUND, message: MESSAGES.MACADDRESS_VALIDATION }, null);
          } else {
            var deviceFeature = await models.h_deviceFeatures.findOne({ where: { deviceFeatureId: deviceMaster.dataValues.deviceFeatureId } });
              if(deviceFeature == null) {
                logger.error(MESSAGES.DEVICEFEATURE_ID_VALIDATION);
                return callback( { httpCode: HttpStatus.NOT_FOUND, message: MESSAGES.DEVICEFEATURE_ID_VALIDATION }, null);
              }
              else
              {
                var location = await models.h_location.findOne({ where: { userId: userId } });
                this.addDevices(body, userId, location.locationId, deviceFeature, callback);
              }
          }
      }
      else 
      {
        //Code For Existing Device 
        console.log(JSON.stringify(device.dataValues.updatedByTCPServer),JSON.stringify(device.dataValues.isConnected) )
        if(device.dataValues.updatedByTCPServer == true)
        {
          models.h_device.update( {isConnected:true, userId: userId}, { where: { macAddress: body.macAddress } });
          return callback({ httpCode: HttpStatus.OK, message: MESSAGES.DEVICES_UPDATED_SUCCESSFULLY }, null );	
        }
        else
        {
          models.h_device.update( {isConnected:false, userId: userId}, { where: { macAddress: body.macAddress } });
          return callback({ httpCode: HttpStatus.OK, message: MESSAGES.DEVICES_NOT_UPDATED_SUCCESSFULLY }, null );	
        }
       
      }


  },

  getDeviceById(params, callback) {
    models.h_device
      .findOne({
        where: { deviceId: params.deviceId },
        include: [
          {
            model: models.h_relays
          }
        ]
      })
      .then(devices => {
        if (devices) {
          return callback(null, devices);
        } else {
          logger.error(MESSAGES.DEVICE_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.DEVICE_DOES_NOT_EXISTS
            },
            null
          );
        }
      });
  },

  getDeviceByUserId(userId, callback) {
    models.h_device
      .findAll({
        where: { userId: userId,isConnected:true },

        include: [
          {
            model: models.h_relays,
            include: [
              {
                model: models.h_schedule
              },
              {
                model: models.h_timer
              }
            ]
          },
          {
            model: models.h_location
          }
        ],
        order: [
          ["displayOrder", "ASC"],
          [models.h_relays, "switchNo", "ASC"]
        ]
      })
      .then(devices => {
        if(devices.length==0){
          logger.error(MESSAGES.NO_DEVICE_CONNECTED);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.NO_DEVICE_CONNECTED
            },
            null
          ); 
          }
        return callback(null, devices);
      });
  },

  updateOrder(body, userId, cb) {
    console.log(body);
    body.forEach(element => {
      models.h_device.update( { displayOrder: element.newDisplayOrder }, { where: { deviceId: element.deviceId, userId: userId } }).then(function(updated) {});
    });
    return cb(null, MESSAGES.DEVICES_UPDATED_SUCCESSFULLY);
  },

  updateLocationById(body, callback) {
    models.h_device
      .findOne({ where: { deviceId: body.deviceId } })
      .then(function(results) {
        if (results == null) {
          logger.error(MESSAGES.DEVICE_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.DEVICE_DOES_NOT_EXISTS
            },
            null
          );
        } else {
          models.h_device
            .update(
              { locationId: body.locationId },
              { where: { deviceId: body.deviceId } }
            )
            .then(function(updated) {
              if (updated == 1) {
                return callback(null, updated);
              }
            })
            .catch(err => {
              logger.error(MESSAGES.DEVICE_COULD_NOT_UPDATE);
              return callback(
                {
                  httpCode: HttpStatus.BAD_REQUEST,
                  message: MESSAGES.DEVICE_COULD_NOT_UPDATE
                },
                null
              );
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  updateDevice(params, body, callback) {
    models.h_device
      .findOne({ where: { deviceId: params.deviceId } })
      .then(function(results) {
        if (results == null) {
          logger.error(MESSAGES.DEVICE_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.DEVICE_DOES_NOT_EXISTS
            },
            null
          );
        } else {
          models.h_device
            .update(
              { deviceName: body.deviceName },
              { where: { deviceId: params.deviceId } }
            )
            .then(function(updated) {
              if (updated == 1) {
                return callback(null, updated);
              }
            })
            .catch(err => {
              logger.error(MESSAGES.DEVICE_COULD_NOT_UPDATE);
              return callback(
                {
                  httpCode: HttpStatus.BAD_REQUEST,
                  message: MESSAGES.DEVICE_COULD_NOT_UPDATE
                },
                null
              );
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteDevice(params, callback) {
    var sequelize = models.sequelize;
    var deviceId = params.deviceId;
    return sequelize.transaction(t => {
        models.h_device.findAll({ where: { deviceId: deviceId } }, { transaction: t }) .then(results => {
            if (results.length == 0) {
              logger.error(MESSAGES.CANNOT_DELETE_DEVICE);
              return callback( { httpCode: HttpStatus.FORBIDDEN, message: MESSAGES.CANNOT_DELETE_DEVICE }, null );
            } else {
              models.h_relays.findAll({ where: { deviceId: deviceId } }) .then(relays => {
                  if (relays.length == 0) {
                    console.log("No Relays to Delete");
                  } else {
                    if (relays.length > 0) {
                      relays.forEach(relay => {
                        models.h_timer.destroy( { where: { relayId: relay.relayId } }, { transaction: t } ) .then(timer => {
                        models.h_schedule.destroy( { where: { relayId: relay.relayId } }, { transaction: t } ) .then(schedule => {
                            models.h_relays.destroy( { where: { deviceId: deviceId } }, { transaction: t } ) .then(relay => {});
                          });
                      });
                    });
                  }
                }
                });
              models.h_device.destroy({ where: { deviceId: deviceId } }, { transaction: t }) .then(device => {
                  return callback(null, device);
                });
            }
          });
      })
      .catch(err => {
        console.log(err);
      });
  },

  async addDevices(body, userId, locationId, deviceFeature, callback) {
    var max = await models.h_device.max("displayOrder", { where: { userId: userId } });
      if (isNaN(max)) {
        max = 0;
      }
      var device = await models.h_device.create({
            deviceName: "HELEO",
            macAddress: body.macAddress,
            userId: userId,
            isConnected: false,
            updatedByTCPServer: false,
            displayOrder: max + 1,
            locationId: locationId
        });
        if (deviceFeature.dataValues.nosOfRelayModules > 0) {
          for (i = 1; i <= deviceFeature.dataValues.nosOfRelayModules; i++) {
            await models.h_relays.create({
                    switchNo: i,
                    switchName: "switch " + i,
                    switchStatus: true,
                    isDimmer: false,
                    deviceId: device.dataValues.deviceId
                  });
              }
            }
            if (deviceFeature.dataValues.hasDimmer === true) {
              await models.h_relays.create({
                  switchNo: 8,
                  switchName: "switch 8",
                  switchStatus: true,
                  isDimmer: true,
                  deviceId: device.dataValues.deviceId
                });
            }
            return callback(null, device);
  }
};
