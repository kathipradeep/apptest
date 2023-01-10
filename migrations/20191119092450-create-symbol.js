'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('h_symbol', {
      symbolId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      symbolName: {
        type: Sequelize.STRING
      },
      symbolImage: {
        type: Sequelize.STRING
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('h_symbol');
  }
};
