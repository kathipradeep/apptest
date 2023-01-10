var fcmService = require("../services").fcmService;
var models = require("../helpers/models");
var commonFunc = require("../helpers/common");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");

module.exports = {
    associateFCM(req, res) {
   
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(req.body, models.fcmModel);
    } catch (e) {
      logger.error(MESSAGES.INVALID_REQ_MSG);
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }
    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      const body = req.body;
      const userId = req.userId;
      try {
        fcmService.associateFCM(body,userId,async (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.FCM_CREATED,
            data: result
          });
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
        console.log(e);
      }
    }
  }
}