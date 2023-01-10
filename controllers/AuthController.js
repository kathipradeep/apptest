var authService = require("../services").authService;
var models = require("../helpers/models");
var commonFunc = require("../helpers/common");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");

module.exports = {
  signIn(req, res) {
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(req.body, models.signInModel);
    } catch (e) {
      logger.error(MESSAGES.INVALID_REQ_MSG);
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }
    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      const body = req.body;
      try {
        authService.signIn(body, (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.LOGGED_IN_SUCCESSFULLY,
            data: result
          });
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
        console.log(e);
      }
    }
  },

  refreshToken(req, res) {
    const userId = req.userId;
    try {
      authService.refreshToken(userId, async (err, result) => {
        if (err) {
          return res.status(err.httpCode).json({
            status: err.message
          });
        }
        return res.status(HttpStatus.OK).json({
          status: MESSAGES.TOKEN_REFRESHED,
          data: result
        });
      });
    } catch (e) {
      logger.error(e);
      res.status(HttpStatus.UNAUTHORIZED).send(e);
      console.log(e);
    }
  }
};
