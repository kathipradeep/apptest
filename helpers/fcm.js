var models = require('../db/models/index');

var getUserTokens = (device) => {
  models.h_fcm.findAll({ where:{userId:device.dataValues.userId}}).then(fcmTokens=>{
          return fcmTokens;
      })
  };

module.exports = {
    getUserTokens
};
