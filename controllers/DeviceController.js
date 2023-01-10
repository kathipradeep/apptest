var deviceService = require('../services').deviceService;
var models = require('../helpers/models');
var commonFunc = require('../helpers/common');
var MESSAGES = require('../helpers/message');
var logger = require('../logger');
var HttpStatus = require('http-status-codes');

module.exports = {
  isConnected(req,res){
    const userId=req.userId;
    const params =req.params;
    if (isNaN(userId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      try {
        deviceService.isConnected(userId, params,async (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.DEVICES_IS_CONNECTED,
              data: result
            });
          }
        });
      } catch (e) {
        console.log(e)
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },
  addDevice(req, res) {
    const body = req.body;
    const userId = req.userId;
    let isValidRequest;
    try {
      isValidRequest = commonFunc.isValidRequest(
        req.body,
        models.addDeviceModel
      );
    } catch (e) {
      logger.error(MESSAGES.INVALID_REQ_MSG);
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }
    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      try {
        deviceService.addDevice(body, userId, async (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.DEVICE_SAVED_SUCCESS,
              data: result
            });
          }
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },
  
  getDeviceById(req, res) {
    const params = req.params;
    if (isNaN(params.deviceId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      try {
        deviceService.getDeviceById(params, async (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.DEVICE_RETRIEVED_SUCCESSFULLY,
              data: result
            });
          }
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },

  getDeviceByUserId(req, res) {
    const userId = req.userId;
    if (isNaN(userId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      try {
        deviceService.getDeviceByUserId(userId, async (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.DEVICES_RETRIEVED_SUCCESSFULLY,
              data: result
            });
          }
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },

  updateDevice(req, res) {
    const params = req.params;
    if (isNaN(params.deviceId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      let isValidRequest;
      try {
        isValidRequest = commonFunc.isValidRequest(
          req.body,
          models.deviceModel
        );
      } catch (e) {
        logger.error(MESSAGES.INVALID_REQ_MSG);
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send(MESSAGES.INVALID_REQ_MSG);
      }

            if (!isValidRequest) {
                return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
            }
            {
             
                const body = req.body;
                try {
                    deviceService.updateDevice(params, body, async (err, result) => {
                        if (err) {
                            return res.status(err.httpCode).json({
                                status: err.message
                            })
                        }
                        else {
                            return res.status(HttpStatus.OK).json({
                                status: MESSAGES.DEVICES_UPDATED_SUCCESSFULLY,
                                data: body
                            })
                        }
                    });
                } catch (e) {
                    logger.error(e);
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
                }

            }

        }

    },
    updateOrder(req,res){
        const body = req.body;
        const userId = req.userId;
        try {
            deviceService.updateOrder(body, userId, (err, result) => {
                if (err) {
                    return res.status(err.httpCode).json({
                        status: err.message
                    })
                }
                else {
                    return res.status(HttpStatus.OK).json({
                        status: result,
                        data: body
                    })
                }
            });
       } catch (e) {
              logger.error(e);
              res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
          }
    
    },
    updateLocationById(req, res) {
        console.log(req.body);
            let isValidRequest;
            try {
                isValidRequest = commonFunc.isValidRequest(req.body, models.updateLocationModel)
            } catch (e) {
                logger.error(MESSAGES.INVALID_REQ_MSG);
                return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
            }

    if (!isValidRequest) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    }
    {
      const body = req.body;
      try {
        deviceService.updateLocationById(body, async (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          } else {
            return res.status(HttpStatus.OK).json({
              status: MESSAGES.DEVICES_UPDATED_SUCCESSFULLY,
              data: body
            });
          }
        });
      } catch (e) {
        logger.error(e);
        console.log(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  },

  deleteDevice(req, res) {
    const params = req.params;
    if (isNaN(params.deviceId)) {
      return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
    } else {
      try {
        deviceService.deleteDevice(params, async (err, result) => {
          if (err) {
            return res.status(err.httpCode).json({
              status: err.message
            });
          }
          return res.status(HttpStatus.OK).json({
            status: MESSAGES.DEVICE_DELETED_SUCCESSFULLY
          });
        });
      } catch (e) {
        logger.error(e);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
      }
    }
  }
};
