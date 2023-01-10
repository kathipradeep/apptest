'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('h_schedule', {
      scheduleId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startDate: {
        type: Sequelize.DATE
      },
      startTime: {
        type: Sequelize.TIME
      },
      startStatus: {
        type: Sequelize.BOOLEAN
      },
      endDate: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.TIME
      },
      endStatus: {
        type: Sequelize.BOOLEAN
      },
      recursionDetail: {
        type: Sequelize.STRING
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('h_schedule');
  }
};
