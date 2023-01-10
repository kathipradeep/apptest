var userService = require("../services").userService;
var models = require("../helpers/models");
var commonFunc = require("../helpers/common");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");

module.exports = {
  registerUser(req, res) {
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(
        req.body,
        models.userRegisterModel
      );
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }
    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      const requestBody = req.body;
      try {
        userService.registerUser(requestBody, (err, result) => {
          if (err) {
            logger.error(err.message);
            return res.status(err.httpCode).json({
              message: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.USER_REGISTRATION_SUCCESS,
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

  validateCodeAndActivateUser(req, res) {
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(req.body, models.validateCodeModel);
    } catch (e) {
      logger.error(MESSAGES.INVALID_REQ_MSG);
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }

    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      const body = req.body;
      try {
        userService.validateCodeAndActivateUser(body, (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.TOKEN_MATCHED_SUCCESSFULLY
          });
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },

  activateUser(req, res) {
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(req.body, models.validateCodeModel);
    } catch (e) {
      logger.error(MESSAGES.INVALID_REQ_MSG);
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }

    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      const body = req.body;
      try {
        userService.activateUser(body, (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.USER_ACTIVATION_SUCCESS
          });
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }

  },
  getStatecity(req,res){
  // const params=req.params;
      
    userService.getStatecity( (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
            
              data:result
            });
          }
        });
      } 
    
    
};
