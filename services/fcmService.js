var models = require("../db/models/index");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");

module.exports = {
  associateFCM(body, userId, callback) {
    console.log("CAME IN associateFCM " + JSON.stringify(body)); 
    models.h_fcm.findOne({ where: {fcmKey: body.fcmKey } }).then(result => {
        if (result != null) {
          if(result.dataValues.userId != body.userId)
          {
            models.h_fcm.update( { userId: userId }, { where: { fcmKey: body.fcmKey } }).then(updated=> {
              return callback(null, updated);
          });
          }
        } else {
          models.h_fcm.create({ fcmKey: body.fcmKey, userId: userId }).then(fcm => {
              return callback(null, fcm);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
