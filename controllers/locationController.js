var locationService = require("../services").locationService;
var models = require("../helpers/models");
var commonFunc = require("../helpers/common");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");

module.exports = {
  addLocation(req, res) {
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(
        req.body,
        models.locationModel
      );
    } catch (e) {
      logger.error(MESSAGES.INVALID_REQ_MSG);
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }

    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      const body = req.body;
      const userId =req.userId;
      try {
        locationService.createLocation(body,userId, async(err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.LOCATION_SAVED_SUCCESSFULLY,
            data: result
          });
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },

  getLocationById(req, res) {
    const userId = req.userId;
    if (isNaN(userId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      try {
        locationService.getLocationById(userId, async(err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.LOCATION_RETRIEVED_SUCCESSFULLY,
            data: result
          });
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },


getLocationByLocationId(req, res) {
  const params = req.params;
  if (isNaN(params.locationId)) {
    return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
  } else {
    try {
      locationService.getLocationByLocationId( params,async(err, result) => {
        if (err) {
          return res.status(err.httpCode).json({
            status: err.message
          });
        }
        return res.status(HttpStatus.OK).json({
          status: MESSAGES.LOCATION_RETRIEVED_SUCCESSFULLY,
          data: result
        });
      });
    } catch (e) {
      logger.error(e);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
},

  updateLocation(req, res) {
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(
        req.body,
        models.updateLocation
      );
    } catch (e) {
      logger.error(MESSAGES.INVALID_REQ_MSG);
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }

    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }
    {
      const userId= req.userId;
      const body = req.body;
      try {
        locationService.updateLocation(body,userId, async(err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.LOCATION_UPDATED_SUCCESSFULLY,
              data: body
            });
          }
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },

  deleteLocation(req, res) {
    const params = req.params;
    const userId =req.userId;
    if (isNaN(params.locationId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      try {
        locationService.deleteLocation(params,userId, async (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.LOCATION_DELETED_SUCCESSFULLY
          });
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  }
};
