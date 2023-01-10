'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('h_timer', {
      timerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timerStartDate: {
        type: Sequelize.DATE
      },
      timerStartTime: {
        type: Sequelize.TIME
      },
      updatedStatus: {
        type: Sequelize.BOOLEAN
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('h_timer');
  }
};
