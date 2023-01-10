'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('h_deviceFeatures', {
      deviceFeatureId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelName: {
        type: Sequelize.STRING
      },

      nosOfRelayModules: {
        type: Sequelize.INTEGER
      },
      hasDimmer: {
        type: Sequelize.BOOLEAN
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('h_deviceFeatures');
  }
};
