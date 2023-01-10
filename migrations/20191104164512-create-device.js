'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('h_device', {
      deviceId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        constraints: false,
        type: Sequelize.INTEGER
      },
      deviceName: {
        type: Sequelize.STRING
      },

      macAddress: {
        type: Sequelize.STRING
      },
      authenticationKey: {
        type: Sequelize.STRING
      },
      isConnected:{
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('h_device');
  }
};