var scheduleService = require("../services").scheduleService;
var models = require("../helpers/models");
var commonFunc = require("../helpers/common");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");

module.exports = {
    createSchedule(req,res){
        let isValidRequest;
        try {
          isValidRequest = commonFunc.isValidRequest(req.body, models.scheduleModel);
        } catch (e) {
          logger.error(MESSAGES.INVALID_REQ_MSG);
          return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        }
    
        if (!isValidRequest) {
          return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        }
        const body=req.body;
        {
            scheduleService.createSchedule(body, async(err, result) => {
                if (err) {
                    return res.status(err.httpCode).json({
                        status: err.message
                    })
                }
                return res.status(HttpStatus.OK).json({
                    status:  MESSAGES.SCHEDULE_CREATED_SUCCESSFULLY,
                    data: result

                })
            }); 
        }
    },
    getScheduleById(req, res) {
        const params = req.params;
        if (isNaN(params.scheduleId)) {
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        } else {
            try {
                scheduleService.getScheduleById(params, async(err, result) => {
                    if (err) {
                        return res.status(err.httpCode).json({
                            status: err.message
                        })
                    }
                    return res.status(HttpStatus.OK).json({
                        status: MESSAGES.SCHEDULE_RETRIEVED_SUCCESSFULLY,
                        data: result

                    })
                });
            } catch (e) {
                logger.error(e);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
                console.log(e);
            }
        }
      },

      getScheduleByRelayId(req, res) {
        const params = req.params;
        if (isNaN(params.relayId)) {
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        } else {
            try {
                scheduleService.getScheduleByRelayId(params, async(err, result) => {
                    if (err) {
                        return res.status(err.httpCode).json({
                            status: err.message
                        })
                    }
                    return res.status(HttpStatus.OK).json({
                        status: MESSAGES.SCHEDULE_RETRIEVED_SUCCESSFULLY,
                        data: result

                    })
                });
            } catch (e) {
                logger.error(e);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
                console.log(e);
            }
        }
    },
    updateSchedule(req, res){ 
        let isValidRequest;
        try {
          isValidRequest = commonFunc.isValidRequest(req.body, models.updatedscheduleModel);
        } catch (e) {
          logger.error(MESSAGES.INVALID_REQ_MSG);
          return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        }
    
        if (!isValidRequest) {
          return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        }
        const body=req.body;
        {
            console.log(body)
            scheduleService.updateSchedule(body, async(err, result) => {
                if (err) {
                    return res.status(err.httpCode).json({
                        status: err.message
                    })
                }
                return res.status(HttpStatus.OK).json({
                    status:MESSAGES.SCHEDULE_UPDATED_SUCCESSFULLY,
                    data: body

                })
            }); 
        }},
    deleteSchedule(req, res) {
        const params = req.params;
        if (isNaN(params.scheduleId)) {
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        } else {
            try {
                scheduleService.deleteSchedule(params, async(err, result) => {
                    if (err) {
                        return res.status(err.httpCode).json({
                            status: err.message
                        })
                    }
                    return res.status(HttpStatus.OK).json({
                        status: MESSAGES.SCHEDULE_DELETED_SUCCESSFULLY
                    })
                });
            } catch (e) {
                logger.error(e);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
            }
        }

    }
};