var forgotpswdService = require('../services').forgotPasswordService;
var models = require('../helpers/models')
var commonFunc = require('../helpers/common')
var MESSAGES = require('../helpers/message');
var logger = require('../logger');
var HttpStatus = require('http-status-codes');


module.exports = {
    validateEmail(req, res) {
        let isValidRequest;
        try {
            isValidRequest = commonFunc.isValidRequest(req.body, models.userModel)
        } catch (e) {
            logger.error(MESSAGES.INVALID_REQ_MSG);
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        }

        if (!isValidRequest) {
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        } else {
            const body = req.body
           
            try {
             
                forgotpswdService.validateEmail(body, (err, result) => {
                   
                    if (err) {
                        return res.status(err.httpCode).json({
                            status: err.message,
                            data: result
                        }) 
                    }
                    return res.status(HttpStatus.OK).json({
                        status: MESSAGES.EMAIL_FOUND_KEY_GENERATED_SUCCESSFULLY,
                        data:result.emailId
                    })
                });
            } catch (e) {
                logger.error(e);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
            }


        }

    },
    validateCode(req, res) {
        let isValidRequest;
        try {
            isValidRequest = commonFunc.isValidRequest(req.body, models.confirm_Code)
        } catch (e) {
            logger.error(MESSAGES.INVALID_REQ_MSG);
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        }

        if (!isValidRequest) {
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        } else {
            const body = req.body
            try {
                forgotpswdService.validateCode(body, (err, result) => {
                    if (err) {
                        return res.status(err.httpCode).json({
                            status: err.message,
                        })
                    }
                    return res.status(HttpStatus.OK).json({
                        status: MESSAGES.TOKEN_MATCHED_SUCCESSFULLY

                    })
                });
            } catch (e) {
                logger.error(e);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
            }


        }
    },
    resetPassword(req, res) {
        let isValidRequest;
        try {
            isValidRequest = commonFunc.isValidRequest(req.body, models.newPswdModel)
        } catch (e) {
            logger.error(MESSAGES.INVALID_REQ_MSG);
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        }

        if (!isValidRequest) {
            return res.status(HttpStatus.BAD_REQUEST).send(MESSAGES.INVALID_REQ_MSG);
        } else {
            const body = req.body
            try {
                forgotpswdService.resetPwd(body, (err, result) => {
                    if (err) {
                        return res.status(err.httpCode).json({
                            status: err.message,
                            data: result
                        })
                    }
                    return res.status(200).json({
                        status: MESSAGES.UPDATE_PASSWORD_SUCCESSFULLY
                    })
                });
            } catch (e) {
                logger.error(e);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
            }


        }
    },


}