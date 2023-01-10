'use strict';
const deviceFeatures = require('../db/models/deviceFeatures');
module.exports = {
  
  up: async(queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('h_deviceFeatures', [{
        modelName: 'H1',
        nosOfRelayModules: 1,
        hasDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'H2',
        nosOfRelayModules: 2,
        hasDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'H3',
        nosOfRelayModules: 4,
        hasDimmer: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'H4',
        nosOfRelayModules: 7,
        hasDimmer: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('h_deviceFeatures', null, {});
    
  }
};