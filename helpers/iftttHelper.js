var models = require("../db/models/index");
const redisClient = require('./redisClient');
const config = require("../config/config");

module.exports = {

  async getUser(email) {
    var user = await models.h_user.findOne({ where: { emailId: email }, raw:true });
    return user;
  },

  async getDevices(userId) {
    var devices = await models.h_device.findAll({ where: { userId: userId }, include: [ { model: models.h_relays } ] });
    return devices;
  },

  async getMacAddress(deviceId) {
    var device = await models.h_device.findOne({ where: { deviceId: deviceId }, raw:true });
    return device.macAddress;
  },

  async updateRelayStatusAndSendCommand(relayId, macAddress, switchNo, switchStatus) {
  
    models.h_relays.update( { switchStatus: switchStatus }, { where: { relayId: relayId } } ).then( updatedRedcords => {
      if (updatedRedcords == 1) {
        var message = {
          macAddress :macAddress,
          switchNo : switchNo,
          status: switchStatus
          }
          redisClient.getClientInstance().publish(config.SUBSCRIPTION_QUEUE,JSON.stringify(message));
       }
    });
    return;
  },

};
