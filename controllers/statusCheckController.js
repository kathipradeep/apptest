var statusCheckService = require("../services").statusCheckService;
var models = require("../helpers/models");
var commonFunc = require("../helpers/common");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");

module.exports = {
    statusCheck(req, res) {
    
      try {
        statusCheckService.statusCheck((err, result) => {
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
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    
  }
}