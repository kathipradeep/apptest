'use strict';
const models = require('../db/models');
const Devices = models.h_device;
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const Device = await Devices.findOne({});
      return queryInterface.bulkInsert('h_relays', [{
        switchNo: 1,
        switchName: 'switch 1',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 1
      },
      {
        switchNo: 2,
        switchName: 'switch 2',
        switchStatus: false,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 1
      },
      {
        switchNo: 3,
        switchName: 'switch 3',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 1
      },
      {switchNo: 4,
        switchName: 'switch 4',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 1,
      },
      {
        switchNo: 5,
        switchName: 'switch 5',
        switchStatus: false,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 1,
        
      },
      {
        switchNo: 6,
        switchName: 'switch 6',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 1,
        
      },
      {
        switchNo: 7,
        switchName: 'switch 7',
        switchStatus: false,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 1,
        
      },
      {
        switchNo: 8,
        switchName: 'switch 8',
        switchStatus: false,
        isDimmer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 1,
        
      },
	  
	  {
        switchNo: 1,
        switchName: 'switch 1',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId:2,
        
      },
      {
        switchNo: 2,
        switchName: 'switch 2',
        switchStatus: false,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 2,
        
      },
      {
        switchNo: 3,
        switchName: 'switch 3',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 2,
        
      },
      {switchNo: 4,
        switchName: 'switch 4',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 2,
        
      },
	  
	  {
        switchNo: 1,
        switchName: 'switch 1',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 3,
        
      },
      {
        switchNo: 2,
        switchName: 'switch 2',
        switchStatus: false,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 3,
        
      },
      {
        switchNo: 3,
        switchName: 'switch 3',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 3,
        
      },
      {switchNo: 4,
        switchName: 'switch 4',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 3,
        
      },
      {
        switchNo: 5,
        switchName: 'switch 5',
        switchStatus: false,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 3,
        
      },
      {
        switchNo: 6,
        switchName: 'switch 6',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 3,
        
      },
      {
        switchNo: 7,
        switchName: 'switch 7',
        switchStatus: false,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 3,
        
      },
      {
        switchNo: 8,
        switchName: 'switch 8',
        switchStatus: false,
        isDimmer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 3,
        
      },
	  
	  {
        switchNo: 1,
        switchName: 'switch 1',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId:4,
        
      },
      {
        switchNo: 2,
        switchName: 'switch 2',
        switchStatus: false,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 4,
        
      },
      {
        switchNo: 3,
        switchName: 'switch 3',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 4,
        
      },
      {
		switchNo: 4,
        switchName: 'switch 4',
        switchStatus: true,
        isDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deviceId: 4,
        
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('h_relays', null, {});
  }
};
