'use strict';
const models = require('../db/models');
const DeviceFeatures = models.h_deviceFeatures;
const User = models.h_user;
const Location = models.h_location;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const DeviceFeature = await DeviceFeatures.findOne({});
    const Users =  await User.findOne({});
      return queryInterface.bulkInsert('h_device', [{
        deviceName: 'device 1',
        macAddress: '00:0a:95:9d:68:19',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        isConnected:false,
        displayOrder:1,
		locationId: 1

      },
      {
        deviceName: 'device 2',
        macAddress: '00:0a:95:9d:68:20',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        isConnected:false,
		displayOrder:1,
		locationId: 1
      },
      {
        deviceName: 'device 1',
        macAddress: '00:0a:95:9d:68:21',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        isConnected:false,
       displayOrder:1,
		locationId: 3
      },
	  {
        deviceName: 'device 2',
        macAddress: '00:0a:95:9d:68:22',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        isConnected:false,
        displayOrder:2,
		locationId: 3
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('h_device', null, {});
  }
};
