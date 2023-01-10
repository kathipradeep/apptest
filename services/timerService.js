var models = require("../db/models/index");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");
var queue = require("../helpers/bullQueue");
var commonFunction = require("../helpers/common");

module.exports = {
  addTimer(body, callback) {
    models.h_relays
      .findOne({ where: { relayId: body.relayId }, include: [ { model: models.h_device }]  } )
      .then(function(result) {
        {
          if (result == null) {
            logger.error(MESSAGES.RELAY_WITH_ID_DOESNOT_EXIST);
            return callback(
              {
                httpCode: HttpStatus.NOT_FOUND,
                message: MESSAGES.RELAY_WITH_ID_DOESNOT_EXIST
              },
              null
            );
          } else {
            models.h_timer
              .create({
                timerStartDate: body.timerStartDate,
                timerStartTime: body.timerStartTime,
                updatedStatus: body.updatedStatus,
                relayId: body.relayId
              }).then(timer => {
                timerObject = commonFunction.getTimerInfoObject(result, timer);
                var delayMS= commonFunction.getDelay(timerObject);
                var timerQueue = queue.getTimerQueue();
                timerQueue.add(timerObject, {jobId: timerObject.timerId, removeOnComplete: true, delay: delayMS}).then( job => {
                  console.log("Job with ID : "+ timerObject.timerId + " created");
                }).catch(error => {
                  console.log("Error Occured : " + error);
                }); 
                return callback(null, timer);
              }) .catch(err => {
                console.log(err);
              });
          }
        }
      }).catch(err => {
        logger.error(MESSAGES.INTERNAL_SERVER_ERROR);
        return callback(
          {
            httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: MESSAGES.INTERNAL_SERVER_ERROR
          },
          null
        );
      });
      
  },
  getTimer(params, callback) {
    models.h_timer
      .findOne({ where: { timerId: params.timerId } })
      .then(function(result) {
        {
          if (result == null) {
            logger.error(MESSAGES.TIMER_WITH_THIS_ID_IS_NOT_FOUND);
            return callback(
              {
                httpCode: HttpStatus.NOT_FOUND,
                message: MESSAGES.TIMER_WITH_THIS_ID_IS_NOT_FOUND
              },
              null
            );
          } else {
            return callback(null, result);
          }
        }
      }).catch(err => {
        logger.error(MESSAGES.INTERNAL_SERVER_ERROR);
        return callback(
          {
            httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: MESSAGES.INTERNAL_SERVER_ERROR
          },
          null
        );
      });
  },
  getalltimers(params, callback) {
    models.h_relays
      .findOne({ where: { relayId: params.relayId } })
      .then(result => {
        if (result == null) {
          logger.error(MESSAGES.RELAY_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.RELAY_DOES_NOT_EXISTS
            },
            null
          );
        } else {
          models.h_timer
            .findAll({ where: { relayId: params.relayId } })
            .then(result => {
              if (result == null) {
                logger.error(MESSAGES.RELAY_DOES_NOT_EXISTS);
                return callback(
                  {
                    httpCode: HttpStatus.NOT_FOUND,
                    message: MESSAGES.RELAY_DOES_NOT_EXISTS
                  },
                  null
                );
              }
              if (result == 0) {
                logger.error(MESSAGES.TIMER_NOT_FOUND);
                return callback(
                  {
                    httpCode: HttpStatus.NOT_FOUND,
                    message: MESSAGES.TIMER_NOT_FOUND
                  },
                  null
                );
              } else {
                return callback(null, result);
              }
            });
        }
      }).catch(err => {
        logger.error(MESSAGES.INTERNAL_SERVER_ERROR);
        return callback(
          {
            httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: MESSAGES.INTERNAL_SERVER_ERROR
          },
          null
        );
      });
  },
  updateTimer(body, callback) {
    models.h_timer
      .findOne({ where: { timerId: body.timerId }})
      .then(result => {
        if (result == null) {
          logger.error(MESSAGES.TIMER_DOESNOT_EXIST);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.TIMER_DOESNOT_EXIST
            },
            null
          );
        } else {
          models.h_timer
            .update(
              {
                timerStartDate: body.timerStartDate,
                timerStartTime: body.timerStartTime,
                updatedStatus: body.updatedStatus
              },
              { where: { timerId: body.timerId } }
            )
            .then(function(updated) {
              if (updated == 1) {
                var rRelayId = result.dataValues.relayId;
                console.log("RelayID : "+ rRelayId);

            models.h_relays.findOne({ where: { relayId: rRelayId }, include: [ { model: models.h_device }]  })
            .then(relay => {
              //console.log(relay);

              timerInfoObject = {};
              // Schedule Data
              timerInfoObject.timerId = body.timerId;
              timerInfoObject.startDate = body.timerStartDate;
              timerInfoObject.startTime = body.timerStartTime;
              timerInfoObject.status = body.updatedStatus;
              //Device and Relay Data
              timerInfoObject.deviceMACAddress = relay.h_device.dataValues.macAddress;
              timerInfoObject.switchNo = relay.switchNo;
              console.log(timerInfoObject);
              var delayMS= commonFunction.getDelay(timerInfoObject);
              var timerQueue = queue.getTimerQueue();

              timerQueue.getJob(body.timerId).then( job => {
                if(job) {
                  job.remove().then( () => {
                    console.log("Job Removed Successfully");
                    timerQueue.add(timerInfoObject, {jobId: timerInfoObject.timerId, removeOnComplete: true, delay: delayMS}).then( job => {
                      console.log("Job with ID : "+ timerInfoObject.timerId + " created");
                    }).catch(error => {
                      console.log("Error Occured : " + error);
                    });
                    }).catch(error => {
                      console.log("Error Occured While Removal of Timer Job : " + error);
                    }) 
                } else {
                    timerQueue.add(timerInfoObject, {jobId: timerInfoObject.timerId, removeOnComplete: true, delay: delayMS}).then( job => {
                      console.log("Job with ID : "+ timerInfoObject.timerId + " created");
                    }).catch(error => {
                      console.log("Error Occured : " + error);
                    });
                }
            });
            });

                return callback(null, updated);
              } else {
                logger.error(MESSAGES.TIMER_CANNOT_BE_UPDATED);
                return callback(
                  {
                    httpCode: HttpStatus.BAD_REQUEST,
                    message: MESSAGES.TIMER_CANNOT_BE_UPDATED
                  },
                  null
                );
              }
            });
        }
      }).catch(err => {
        logger.error(MESSAGES.INTERNAL_SERVER_ERROR);
        return callback(
          {
            httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: MESSAGES.INTERNAL_SERVER_ERROR
          },
          null
        );
      });
  },
  deleteTimer(params, callback) {
    models.h_timer
      .findOne({ where: { timerId: params.timerId } })
      .then(result => {
        if (result == null) {
          logger.error(MESSAGES.TIMER_NOT_FOUND);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.TIMER_NOT_FOUND
            },
            null
          );
        } else {
          models.h_timer
            .destroy({
              where: {
                timerId: params.timerId
              }
            })
            .then(function(rowDeleted) {
              var timerQueue = queue.getTimerQueue();
              timerQueue.getJob(params.timerId).then( job => {
                if(job) {
                job.remove().then( () => {
                  console.log("Job Removed Successfully");
                }).catch(error => {
                  console.log("Error Occured While Removal of Timer Job : " + error);
                }) 
              }
              });
              return callback(null, rowDeleted);
            }).catch(err => {
              logger.error(MESSAGES.TIMER_CANNOT_BE_DLETED);
              return callback(
                {
                  httpCode: HttpStatus.NOT_ACCEPTABLE,
                  message: MESSAGES.TIMER_CANNOT_BE_DLETED
                },
                null
              );
            });
        }
      }).catch(err => {
        logger.error(MESSAGES.INTERNAL_SERVER_ERROR);
        return callback(
          {
            httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: MESSAGES.INTERNAL_SERVER_ERROR
          },
          null
        );
      });
  }
};
