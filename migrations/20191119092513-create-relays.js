'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('h_relays', {
      relayId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      switchNo: {
        type: Sequelize.INTEGER
      },
      switchName: {
        type: Sequelize.STRING
      },
      switchStatus: {
        type: Sequelize.BOOLEAN
      },
      isDimmer: {
        type: Sequelize.INTEGER
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('h_relays');
  }
};
