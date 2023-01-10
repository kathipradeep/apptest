var relayService = require('../services').relayService;
var models = require('../helpers/models');
var commonFunc = require('../helpers/common');
var MESSAGES = require('../helpers/message');
var logger = require('../logger');
var HttpStatus = require('http-status-codes');

module.exports = {
    getRelayByDeviceId(req, res) {
        const params = req.params;
        if (isNaN(params.deviceId)) {
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        } else {
            try {
                relayService.getRelayByDeviceId(params, async(err, result) => {
                    if (err) {
                        return res.status(err.httpCode).json({
                            status: err.message
                        })
                    }
                    return res.status(HttpStatus.OK).json({
                        status: MESSAGES.RELAY_RETRIEVED_SUCCESSFULLY,
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
    getRelayById(req, res) {
        const params = req.params;
        if (isNaN(params.relayId)) {
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        } else {
            try {
                relayService.getRelayById(params, async(err, result) => {
                    if (err) {
                        return res.status(err.httpCode).json({
                            status: err.message
                        })
                    }
                    return res.status(HttpStatus.OK).json({
                        status: MESSAGES.RELAY_RETRIEVED_SUCCESSFULLY,
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

    updateRelay(req, res) {  
        const params = req.params;
        if (isNaN(params.relayId)) {
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        } else {
            let isValidRequest;
            try {
                isValidRequest = commonFunc.isValidRequest(req.body, models.relayModel)
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
                    relayService.updateRelay(params, body, async(err, result) => {
                        if (err) {
                            return res.status(err.httpCode).json({
                                status: err.message
                            })
                        }
                        else {
                            return res.status(HttpStatus.OK).json({
                                status: MESSAGES.RELAY_UPDATED_SUCCESSFULLY,
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
    updateRelaystatus(req, res) { 
        {
            let isValidRequest;
            try {
                isValidRequest = commonFunc.isValidRequest(req.body, models.relaystatusModel)
            } catch (e) {
                logger.error(MESSAGES.INVALID_REQ_MSG);
                return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
            }

            if (!isValidRequest) {
                return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
            }
            {
              const userId = req.userId;
                const body = req.body;
                try {
                    relayService.updateRelaystatus( body,userId, async(err, result) => {
                        if (err) {
                            return res.status(err.httpCode).json({
                                status: err.message
                            })
                        }
                        else {
                            return res.status(HttpStatus.OK).json({
                                status: MESSAGES.RELAY_STATUS_UPDATED_SUCCESSFULLY,
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

}
