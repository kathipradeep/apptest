var models = require("../db/models/index");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");
var commonFunction = require("../helpers/common");
var scheduleQueue = require("../helpers/bullQueue");

module.exports = {
  createSchedule(body, callback) {
    models.h_relays
      .findOne({
        where: { relayId: body.relayId },
        include: [{ model: models.h_device }]
      })
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
            hScheduleObj = gethScheduleObject(body);
            models.h_schedule.create(hScheduleObj).then(schedule => {
                scheduleObject = commonFunction.getScheduleInfoObject(result, schedule);
                cronExpressions = commonFunction.getCRONExpressions(scheduleObject);

                var queue = scheduleQueue.getScheduleQueue();

                var id1 = scheduleObject.scheduleId + "_1";
                console.log(cronExpressions[0]);

                repeatOpts = getRepeatOpts(id1,cronExpressions[0],scheduleObject);

                queue.add(scheduleObject, { repeat: repeatOpts, removeOnComplete: true }).then(job => {
                    if (job) {
                      console.log("Job with ID : " + id1 + " created. Job Data is " + JSON.stringify(job));
                    } else {
                      console.log("Error Creating Job");
                    }
                  })
                  .catch(error => {
                    console.log("Error Occured : " + error);
                  });

                var id2 = scheduleObject.scheduleId + "_2";
                console.log(cronExpressions[1]);

                repeatOpts1 = getRepeatOpts(id2, cronExpressions[1], scheduleObject );
                queue.add(scheduleObject, { repeat: repeatOpts1, removeOnComplete: true }).then(job => {
                    if (job) {
                      console.log("Job with ID : " + id2 + " created. Job Data is " + JSON.stringify(job));
                    } else {
                      console.log("Error Creating Job");
                    }
                  })
                  .catch(error => {
                    console.log("Error Occured : " + error);
                  });
                return callback(null, schedule);
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
      })
      .catch(err => {
        logger.error(MESSAGES.INTERNAL_SERVER_ERROR + err);
        return callback(
          {
            httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: MESSAGES.INTERNAL_SERVER_ERROR
          },
          null
        );
      });
  },
  getScheduleById(params, callback) {
    models.h_schedule
      .findOne({
        where: { scheduleId: params.scheduleId },
        order: [["startDate", "ASC"]]
      })
      .then(schedule => {
        if (schedule == null) {
          logger.error(MESSAGES.SCHEDULE_NOT_FOUND);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.SCHEDULE_NOT_FOUND
            },
            null
          );
        } else {
          var schedule = {
            scheduleId: schedule.scheduleId,
            startDate: schedule.startDate,
            startTime: schedule.startTime,
            startStatus: schedule.startStatus,
            endDate: schedule.endDate,
            endTime: schedule.endTime,
            endStatus: schedule.endStatus,
            frequency: schedule.frequency,
            interval: schedule.interval,
            days: schedule.days
          };
          return callback(null, schedule);
        }
      });
  },

  getScheduleByRelayId(params, callback) {
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
          models.h_schedule
            .findAll({
              where: { relayId: params.relayId },
              order: [["startDate", "ASC"]]
            })
            .then(schedule => {
              if (schedule == 0) {
                logger.error(MESSAGES.SCHEDULE_NOT_FOUND);
                return callback(
                  {
                    httpCode: HttpStatus.NOT_FOUND,
                    message: MESSAGES.SCHEDULE_NOT_FOUND
                  },
                  null
                );
              } else {
                return callback(null, schedule);
              }
            });
        }
      });
  },

  updateSchedule(body, callback) {
    models.h_schedule
      .findOne({ where: { scheduleId: body.scheduleId } })
      .then(result => {
        if (result == null) {
          logger.error(MESSAGES.SCHEDULE_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.SCHEDULE_DOES_NOT_EXISTS
            },
            null
          );
        } else {
          //console.log(body);

          models.h_schedule
            .update(
              {
                startDate: body.startDate,
                startTime: body.startTime,
                startStatus: body.startStatus,
                endDate: body.endDate,
                endTime: body.endTime,
                endStatus: body.endStatus,
                frequency: body.frequency,
                interval: body.interval,
                days: body.days
              },
              { where: { scheduleId: body.scheduleId } }
            )
            .then(function(updated) {
              if (updated == 1) {
                var rRelayId = result.dataValues.relayId;
                models.h_relays
                  .findOne({
                    where: { relayId: rRelayId },
                    include: [{ model: models.h_device }]
                  })
                  .then(relay => {
                    scheduleObject = {};
                    // Schedule Data
                    scheduleObject.scheduleId = body.scheduleId;
                    scheduleObject.startDate = body.startDate;
                    scheduleObject.startTime = body.startTime;
                    scheduleObject.startStatus = body.startStatus;
                    scheduleObject.endDate = body.endDate;
                    scheduleObject.endTime = body.endTime;
                    scheduleObject.endStatus = body.endStatus;
                    scheduleObject.frequency = body.frequency;
                    scheduleObject.interval = body.interval;
                    scheduleObject.days = body.days;
                    //Device and Relay Data
                    scheduleObject.deviceMACAddress =
                      relay.h_device.dataValues.macAddress;
                    scheduleObject.switchNo = relay.switchNo;

                    cronExpressions = commonFunction.getCRONExpressions(scheduleObject);

                    var queue = scheduleQueue.getScheduleQueue();
                    var id1 = body.scheduleId + "_1";
                    var id2 = body.scheduleId + "_2";
                    var startJobFound,
                      endJobFound = false;
                    queue.getRepeatableJobs().then(repeatJobs => {
                      repeatJobs.forEach(job => {
                        if (job) {
                          if (job.id == id1) {
                            startJobFound = true;
                            delRepeatOpts = getDelRepeatOpts(job);
                            queue.removeRepeatable(delRepeatOpts);
                            console.log("Job with ID " + job.id + " deleted successfully");

                            repeatOpts = getRepeatOpts(id1, cronExpressions[0], scheduleObject);

                            queue.add(scheduleObject, { removeOnComplete: true, repeat: repeatOpts }).then(job => {
                                if (job) {
                                  console.log("Job with ID : " + id1 + " created. Job Data is " + JSON.stringify(job) );
                                } else {
                                  console.log("Error Creating Job");
                                }
                              })
                              .catch(error => {
                                console.log("Error Occured : " + error);
                              });
                          }

                          if (job.id == id2) {
                            endJobFound = true;
                            delRepeatOpts = getDelRepeatOpts(job);
                            queue.removeRepeatable(delRepeatOpts);
                            console.log( "Job with ID " + job.id + " deleted successfully" );
                            repeatOpts1 = getRepeatOpts( id2, cronExpressions[1], scheduleObject );
                            queue .add(scheduleObject, { removeOnComplete: true, repeat: repeatOpts1 }) .then(job => {
                                if (job) {
                                  console.log( "Job with ID : " + id2 + " created. Job Data is " + JSON.stringify(job) );
                                } else {
                                  console.log("Error Creating Job");
                                }
                              })
                              .catch(error => {
                                console.log("Error Occured : " + error);
                              });
                          }
                        }

                        if (!startJobFound) {
                          repeatOpts = getRepeatOpts( id1, cronExpressions[0], scheduleObject );
                          queue .add(scheduleObject, { endDate: scheduleObject.endDate, removeOnComplete: true, repeat: repeatOpts }) .then(job => {
                              if (job) {
                                console.log( "Job with ID : " + id1 + " created. Job Data is " + JSON.stringify(job) );
                              } else {
                                console.log("Error Creating Job");
                              }
                            })
                            .catch(error => {
                              console.log("Error Occured : " + error);
                            });
                        }

                        if (!endJobFound) {
                          repeatOpts1 = getRepeatOpts( id2, cronExpressions[1], scheduleObject );
                          queue .add(scheduleObject, { endDate: scheduleObject.endDate, removeOnComplete: true, repeat: repeatOpts1 }) .then(job => {
                              if (job) {
                                console.log( "Job with ID : " + id2 + " created. Job Data is " + JSON.stringify(job) );
                              } else {
                                console.log("Error Creating Job");
                              }
                            })
                            .catch(error => {
                              console.log("Error Occured : " + error);
                            });
                        }
                      });
                    });
                  });

                return callback(null, updated);
              } else {
                logger.error(MESSAGES.SCHEDULE_CANNOT_BE_UPDATED);
                return callback(
                  {
                    httpCode: HttpStatus.BAD_REQUEST,
                    message: MESSAGES.SCHEDULE_CANNOT_BE_UPDATED
                  },
                  null
                );
              }
            });
        }
      })
      .catch(err => {
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
  deleteSchedule(params, callback) {
    models.h_schedule
      .findOne({
        where: { scheduleId: params.scheduleId }
      })
      .then(schedule => {
        if (schedule == null) {
          logger.error(MESSAGES.SCHEDULE_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.SCHEDULE_DOES_NOT_EXISTS
            },
            null
          );
        } else {
          models.h_schedule
            .destroy({ where: { scheduleId: params.scheduleId } })
            .then(schedule => {
              var queue = scheduleQueue.getScheduleQueue();
              jobID1 = params.scheduleId + "_1";
              jobID2 = params.scheduleId + "_2";

              queue.getRepeatableJobs().then(repeatJobs => {
                repeatJobs.forEach(job => {
                  if (job.id == jobID1 || job.id == jobID2) {
                    delRepeatOpts = getDelRepeatOpts(job);
                    queue.removeRepeatable(delRepeatOpts);
                  }
                });
              });

              return callback(null, schedule);
            });
        }
      });
  }
};

function getDelRepeatOpts(job) {
  //console.log(job);
  let delRepeatOpts = {
    jobId: job.id,
    cron: job.cron,
    startDate: job.startDate,
    endDate: job.endDate,
    tz: "Asia/Kolkata"
  };

  return delRepeatOpts;
}

function getRepeatOpts(id, cronExpression, scheduleObject) {
  let repeatOpts = {
    jobId: id,
    cron: cronExpression,
    startDate: scheduleObject.startDate,
    endDate: scheduleObject.endDate,
    tz: "Asia/Kolkata"
  };
  return repeatOpts;
}

function gethScheduleObject(body) {
  let hScheduleObj = {
    startDate: body.startDate,
    startTime: body.startTime,
    startStatus: body.startStatus,
    endDate: body.endDate,
    endTime: body.endTime,
    endStatus: body.endStatus,
    frequency: body.frequency,
    interval: body.interval,
    days: body.days,
    relayId: body.relayId
  };
  return hScheduleObj;
}
