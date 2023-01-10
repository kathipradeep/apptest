var models = require("../db/models/index");
//var {Sequelize}=require("../db/models/index");
var MESSAGES = require("../helpers/message");
var HttpStatus = require("http-status-codes");
const notification = require("../helpers/notification");
const bcrypt = require("bcryptjs");
//const randomInt = require('random-int');
var logger = require('../logger');
var commonFunction = require('../helpers/common');
//const Op=Sequelize.Op;

module.exports = {
  registerUser(requestBody, callback) {
    var generatedCode;
    models.h_user.findOne({ where: { emailId: requestBody.emailId } }).then(result => {
        if (result != null) {
          return callback({httpCode: HttpStatus.CONFLICT,message:MESSAGES.USER_ALREADY_EXISTS}, null)
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(requestBody.password, salt, (err, hash) => {
              if (err) throw err;
              requestBody.password = hash;
              requestBody.createdBy = "owner";
              requestBody.isUserValidated = false;
              generatedCode = commonFunction.generateRandomCode();
              //commonFunction.removeOldCodes(requestBody.emailId, MESSAGES.ACTIVATION_TEXT_FOR_CODE);
              models.h_code.destroy({ where: { emailId: requestBody.emailId, usedFor: MESSAGES.ACTIVATION_TEXT_FOR_CODE } }).then(rowsAffected => {
                //generatedCode= randomInt(100000,999999);
                models.h_user.create(requestBody).then(user => {
                  notification.sendNotification(requestBody.emailId,generatedCode,MESSAGES.ACTIVATION_EMAIL_SUBJECT, MESSAGES.ACTIVATION_EMAIL_TEXT);
                  var data=[]; 
                  var codeModel = {
                    emailId: requestBody.emailId,
                    mobileNumber: requestBody.mobileNumber,
                    generatedCode: generatedCode,
                    expirationTime: Date.now() + 300000,
                    usedFor: MESSAGES.ACTIVATION_TEXT_FOR_CODE
                  };
                  var locationModel = {
                    userId:user.dataValues.userId,
                    locationName: "Hall"
                  };
                  models.h_code.create(codeModel).then(result => {
                    
                  models.h_location.create(locationModel).then(result => {
                    data.push(user);
                    return callback(null, data);
                  });
                });
                });
              })
              });
          });
        }
      });
  },

  validateCodeAndActivateUser(body, callback) {
    /* console.log(body);
     models.h_code.destroy({ where: { 
      emailId: body.emailId,
      usedFor:body.usedFor,
      generatedCode: {
         [Op.ne]: body.generatedCode
         }
       createdAt: {
        $ne: null
      } 
       } }).then( rowsAffected => { 
         //console.log(rowsAffected); */
        models.h_code.findOne({ where: { emailId: body.emailId,generatedCode:body.generatedCode,usedFor:body.usedFor } })
        .then(function (results) {
            if (results) {
                //console.log(results)
                var current_time = new Date();
                if (current_time.getTime() < results.expirationTime.getTime()) {
                    models.h_user.update({isUserValidated: true }, {where : {emailId: body.emailId}}).then(rowsUpdated => {
                        models.h_code.destroy({ where: {emailId: body.emailId,generatedCode:body.generatedCode,usedFor:body.usedFor} }). then( rowsDeleted => {
                            if(rowsDeleted == 1)
                        {
                            return callback({ httpCode: HttpStatus.OK, message: MESSAGES.USER_ACTIVATION_SUCCESS }, null)
                        } 
                        })
                    });
                } 
                else {
                    logger.error(MESSAGES.TOKEN_EXPIRED);
                    return callback({ httpCode: HttpStatus.REQUEST_TIMEOUT, message: MESSAGES.TOKEN_EXPIRED }, null)
                }
           }
            else {
                logger.error(MESSAGES.TOKEN_DOES_NOT_MATCHED);
                return callback({ httpCode: HttpStatus.FORBIDDEN, message: MESSAGES.TOKEN_DOES_NOT_MATCHED }, null)
            }
        }) 
    //})

},

getStatecity(callback){
  models.h_state.findAll({ include: [{ model: models.h_city }],order: [["state", "ASC"]] }).then(cities => {
            return callback(null, cities);
          });
}
};
