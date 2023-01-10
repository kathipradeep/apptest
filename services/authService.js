var models = require('../db/models/index');
var MESSAGES = require('../helpers/message');
var logger = require('../logger');
var HttpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/tokenContent');

module.exports = {
  signIn(body, callback) {
    models.h_user
      .findOne({ where: { emailId: body.emailId } })
      .then(function(result) {
        if (result == null) {
          logger.error(MESSAGES.INVALID_CREDENTIALS);
          return callback(
            {
              httpCode: HttpStatus.FORBIDDEN,
              message: MESSAGES.INVALID_CREDENTIALS
            },
            null
          );
        }
        bcrypt.compare(body.password, result.password).then(isMatch => {
          if (isMatch) {
            const payload = {
              id: result.userId
            };
            let tokenSecret = config.secret;
            jwt.sign(payload, tokenSecret, { expiresIn: config.tokenLife},(err, token) => {
                if (err) {
                  logger.error(MESSAGES.INVALID_CREDENTIALS);
                  return callback(
                    {
                      httpCode: HttpStatus.FORBIDDEN,
                      message: MESSAGES.INVALID_CREDENTIALS
                    },
                    null
                  );
                } else {
                  var data = [];
                  //data.push(result);
                  var userInfo = {
                    userId: result.userId,
                    name: result.name,
                    emailId: result.emailId,
                    isUserValidated: result.isUserValidated,
                    token: token,
                    tokenExpiresIn:config.tokenLife
                  };
                  //data.push(token);
                  data.push(userInfo);
                  return callback(null, data);
                }
            });
          } else {
            logger.error(MESSAGES.INVALID_CREDENTIALS);
            return callback(
              {
                httpCode: HttpStatus.FORBIDDEN,
                message: MESSAGES.INVALID_CREDENTIALS
              },
              null
            );
          }
        });
      });
  },

  refreshToken(userId, callback){
          const payload = {
            id: userId
          };
          let refreshSecret = config.refreshTokenSecret;
            jwt.sign(payload, refreshSecret, {expiresIn: config.refreshTokenLife}, (err, refreshToken )=>{
              if (err) {
                logger.error(MESSAGES.INVALID_CREDENTIALS);
                return callback(
                  {
                    httpCode: HttpStatus.FORBIDDEN,
                    message: MESSAGES.INVALID_CREDENTIALS
                  },
                  null
                );
              } else {
                var data = [];
                var userInfo = {
                  userId: userId,
                  refreshToken: refreshToken,
                  refreshTokenExpiresIn: config.refreshTokenLife
                };
                //data.push(token);
                data.push(userInfo);
                return callback(null, data);
              }
            })
        }

          
       

}
