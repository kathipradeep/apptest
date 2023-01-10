var models = require('../db/models/index');
var MESSAGES = require('../helpers/message');
var logger = require('../logger');
var HttpStatus = require('http-status-codes');
const redisClient = require('../helpers/redisClient');
var config = require("../config/config");

module.exports = {
  getRelayByDeviceId(params, callback) {
    models.h_device
      .findOne({ where: { deviceId: params.deviceId } })
      .then(function(result) {
        if (result == null) {
          logger.error(MESSAGES.DEVICE_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.DEVICE_DOES_NOT_EXISTS
            },
            null
          );
        } else {
          models.h_relays
            .findAll({
              where: { deviceId: params.deviceId },
              order: [["switchNo", "ASC"]]
            })
            .then(relay => {
              if (relay == null) {
                logger.error(MESSAGES.RELAY_NOT_FOUND);
                return callback(
                  {
                    httpCode: HttpStatus.NOT_FOUND,
                    message: MESSAGES.RELAY_NOT_FOUND
                  },
                  null
                );
              } else {
                return callback(null, relay);
              }
            });
        }
      });
  },
  getRelayById(params, callback) {
    models.h_relays
      .findOne({
        where: { relayId: params.relayId },
        order: [["switchName", "ASC"]]
      })
      .then(relay => {
        if (relay == null) {
          logger.error(MESSAGES.RELAY_NOT_FOUND);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.RELAY_NOT_FOUND
            },
            null
          );
        } else {
          var relay = {
            relayId: relay.relayId,
            switchNo: relay.switchNo,
            switchName: relay.switchName,
            switchStatus: relay.switchStatus,
            isDimmer: relay.isDimmer,
            deviceId: relay.deviceId,
            symbolId: relay.symbolId
          };
          return callback(null, relay);
        }
      });
  },

  updateRelay(params, body, callback) {
    models.h_relays
      .findOne({ where: { relayId: params.relayId } })
      .then(function(results) {
        if (results == null) {
          logger.error(MESSAGES.RELAY_WITH_ID_DOESNOT_EXIST);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.RELAY_WITH_ID_DOESNOT_EXIST
            },
            null
          );
        } else {
          models.h_relays
            .update(
              { switchName: body.switchName },
              { where: { relayId: params.relayId } }
            )
            .then(function(updated) {
              if (updated == 1) {
                return callback(null, updated);
              }
            })
            .catch(err => {
              logger.error(MESSAGES.RELAY_CANNOT_BE_UPDATED);
              return callback(
                {
                  httpCode: HttpStatus.FORBIDDEN,
                  message: MESSAGES.RELAY_CANNOT_BE_UPDATED
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

    updateRelaystatus(body, userId, callback) {
    models.h_relays.
    findOne({ where: { relayId: body.relayId }, include: [{model: models.h_device}] })
            .then(function (results) {
              //console.log(results)
                if (results == null) {
                    logger.error(MESSAGES.RELAY_WITH_ID_DOESNOT_EXIST);
                    return callback(
                    { 
                    httpCode: HttpStatus.NOT_FOUND,
                    message: MESSAGES.RELAY_WITH_ID_DOESNOT_EXIST 
                    },
                    null
                    );
                } else {
                    models.h_relays.
                    update(
                    { switchStatus: body.switchStatus },
                    { where: { relayId: body.relayId } }
                    )
                    .then(function (updated) {
                       if (updated == 1) {
                                //console.log(results);
                                console.log(results.h_device.dataValues.macAddress,results.dataValues.switchNo, body.switchStatus);

                                //const publisher = redis.createClient();
                                const message = {
                                macAddress :results.h_device.dataValues.macAddress,
                                switchNo : results.dataValues.switchNo,
                                status: body.switchStatus
                                }
                                console.log("Before Publishing Message");    
                                //console.log(publisher);
                                
                                redisClient.getClientInstance().publish(config.SUBSCRIPTION_QUEUE,JSON.stringify(message));
                                console.log("After Publishing Message");
                                return callback(null, updated);
                            }
                          })
                          .catch(err => {
                            logger.error(MESSAGES.RELAY_STATUS_CANNOT_BE_UPDATED);
                            return callback(
                            { 
                              httpCode: HttpStatus.NOT_ACCEPTABLE,
                              message: MESSAGES.RELAY_STATUS_CANNOT_BE_UPDATED 
                              },
                              null
                              );
                        });
                }
                })
                .catch(err => {
                console.log(err)
            })
    
  }                 
};