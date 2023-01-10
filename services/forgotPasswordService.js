var models = require("../db/models/index");
var logger = require("../logger");
var MESSAGES = require("../helpers/message");
var HttpStatus = require("http-status-codes");
//const randomInt = require("random-int");
const notification = require("../helpers/notification");
const bcrypt = require("bcryptjs");
var commonFunction = require('../helpers/common');

module.exports = {
  validateEmail(body, callback) {
    models.h_user
      .findOne({ where: { emailId: body.emailId } })
      .then(function(results) {
        //console.log(results);

        if (results == null) {
          logger.error(MESSAGES.EMAIL_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.EMAIL_DOES_NOT_EXISTS
            },
            null
          );
        } else {
          if (results != null) {
            generatedCode = commonFunction.generateRandomCode();
            //commonFunction.removeOldCodes(body.emailId, body.usedFor);
            models.h_code.destroy({ where: { emailId: body.emailId, usedFor: body.usedFor } }).then(rowsAffected => {
          //  generatedCode = randomInt(100000, 999999);
          //  console.log(generatedCode);
            resetPasswordExpires = Date.now() + 300000;
            notification.sendNotification(
              body.emailId,
              generatedCode,
              MESSAGES.RESET_PASSWORD_EMAIL_SUBJECT,
              MESSAGES.RESET_PASSWORD_EMAIL_TEXT
            );
            models.h_code
              .create({
                emailId: body.emailId,
                generatedCode: generatedCode,
                mobileNumber: results.mobileNumber,
                expirationTime: resetPasswordExpires,
                usedFor: body.usedFor
              })
              .then(forgotPswd => {
                return callback(null, forgotPswd);
              });
            });
            }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

 validateCode(body, callback) {
      models.h_code
        .findOne({
          where: {
            emailId: body.emailId,
            generatedCode: body.generatedCode,
            usedFor: MESSAGES.ACTIVATION_TEXT_FOR_RESET_PASSWORD
          }
        })
        .then(function(results) {
          if (results) {
            var current_time = new Date();
            if (current_time.getTime() < results.expirationTime.getTime()) {
              return callback(
                {
                  httpCode: HttpStatus.OK,
                  message: MESSAGES.TOKEN_MATCHED_SUCCESSFULLY
                },
                null
              );
            } else {
              logger.error(MESSAGES.TOKEN_EXPIRED);
              models.h_code
                .destroy({
                  where: {
                    emailId: body.emailId,
                    generatedCode: body.generatedCode,
                    usedFor: MESSAGES.ACTIVATION_TEXT_FOR_RESET_PASSWORD
                  }
                })
                .then(
                  function(rowDeleted) {
                    // rowDeleted will return number of rows deleted
                    if (rowDeleted === 1) {
                      return callback(
                        {
                          httpCode: HttpStatus.REQUEST_TIMEOUT,
                          message: MESSAGES.TOKEN_EXPIRED_DELETED
                        },
                        null
                      );
                    }
                  },
                  function(err) {
                    console.log(err);
                  }
                );
            }
          } else {
            logger.error(MESSAGES.TOKEN_DOES_NOT_MATCHED);
            return callback(
              {
                httpCode: HttpStatus.NOT_FOUND,
                message: MESSAGES.TOKEN_DOES_NOT_MATCHED
              },
              null
            );
          }
        });
    },

  resetPwd(body, callback) {
      //console.log(body)
    models.h_code
      .findOne({
        where: {
          emailId: body.emailId,
          generatedCode: body.generatedCode,
          usedFor: MESSAGES.ACTIVATION_TEXT_FOR_RESET_PASSWORD
        }
      })
      .then(function(results) {
        if (results == null) {
          logger.error(MESSAGES.EMAIL_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.EMAIL_DOES_NOT_EXISTS
            },
            null
          );
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(body.new_pswd, salt, (err, hash) => {
              if (err) throw err;
              new_pswd = hash;
              models.h_user
                .update(
                  { password: new_pswd },
                  { where: { emailId: body.emailId } }
                )
                .then(newPswd => {
                  models.h_code
                    .destroy({
                      where: {
                        emailId: body.emailId,
                        generatedCode: body.generatedCode,
                        usedFor: MESSAGES.ACTIVATION_TEXT_FOR_RESET_PASSWORD
                      }
                    })
                    .then(function(rowDeleted) {
                      return callback(null, newPswd);
                    });
                });
            });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
