'use strict';
const models = require('../db/models');
const DeviceFeatures = models.h_deviceFeatures;

module.exports = {
  up: async (queryInterface) => {
    const DeviceFeature = await DeviceFeatures.findOne({});
     
    return await queryInterface.bulkInsert('h_deviceMaster', [
      {
        deviceMACAddress: '84:F3:EB:D2:0C:F4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceFeatureId:4
      },
      {
        deviceMACAddress: '84:F3:EB:D2:0C:F1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceFeatureId:4
      },
      {
        deviceMACAddress: '84:F3:EB:D2:0C:DF',
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceFeatureId:4
        
      },
       { 
	   deviceMACAddress: '00:0a:95:9d:68:19',
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceFeatureId:4
        
      },
	  {
        deviceMACAddress: '00:0a:95:9d:68:20',
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceFeatureId:3
        
      },
	  {
        deviceMACAddress: '00:0a:95:9d:68:21',
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceFeatureId:4
        
      },
	  {
		  
        deviceMACAddress: '00:0a:95:9d:68:22',
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceFeatureId:3
        
      }
	  
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('h_deviceMaster', null, {});
  }
};
