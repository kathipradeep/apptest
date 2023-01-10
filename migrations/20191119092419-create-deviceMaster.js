'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('h_deviceMaster', {
      deviceMasterId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deviceMACAddress: {
        type: Sequelize.STRING
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('h_deviceMaster');
  }
};
