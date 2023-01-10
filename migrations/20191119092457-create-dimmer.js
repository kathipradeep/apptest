'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('h_dimmer', {
      dimmerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dimmerLevel: {
        type: Sequelize.INTEGER
      },
      dimmerLevelName: {
        type: Sequelize.STRING
      },
      dimmerLevelValue: {
        type: Sequelize.INTEGER
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('h_dimmer');
  }
};
