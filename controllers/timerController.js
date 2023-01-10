var timerService = require("../services").timerService;
var models = require("../helpers/models");
var commonFunc = require("../helpers/common");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");

module.exports = {
  addTimer(req, res) {
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(req.body, models.timerModel);
    } catch (e) {
      logger.error(MESSAGES.INVALID_REQ_MSG);
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }

    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }
    const body = req.body;
    try {
      timerService.addTimer(body, async(err, result) => {
        if (err) {
          return res.status(err.httpCode).json({
            status: err.message
          });
        } else {
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.TIMER_ADDED_SUCCESSFULLY
          });
        }
      });
    } catch (e) {
      logger.error(e);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  },
  getTimer(req, res) {
    const params = req.params;
    console.log(req.params)
    if (isNaN(params.timerId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      try {
        timerService.getTimer(params, async(err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.TIMER_RETRIVED_SUCCESSFULLY,
              data:result
            });
          }
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },
  getalltimers(req,res){
    const params = req.params;
    if (isNaN(params.relayId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      try {
        timerService.getalltimers(params, async(err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.ALL_TIMERS_RETRIVED_SUCCESSFULLY,
              data:result
            });
          }
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },
  updateTimer(req,res){
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(req.body, models.updatetimerModel);
    } catch (e) {
      logger.error(MESSAGES.INVALID_REQ_MSG);
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }

    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }
    const body=req.body
      try {
        timerService.updateTimer(body, async(err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.TIMER_UPDATED_SUCCESSFULLY,
              data:body
            });
          }
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
  
  },
  deleteTimer(req,res){
    const params = req.params;
    if (isNaN(params.timerId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }
    else {
      try {
        timerService.deleteTimer(params, async(err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.DELETED_TIMER_SUCCESSFULLY,
              data:result
            });
          }
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  }

};
