'use strict';
const models = require('../db/models');
const User = models.h_user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Users = await User.findOne({});
    return queryInterface.bulkInsert('h_location', [{
	  locationId: 1,
      locationName: 'Hall',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    },
    {
		locationId: 2,
      locationName: 'Bedroom',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    },
    {
		locationId: 3,
      locationName: 'Hall',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2
    },
    {
		locationId: 4,
      locationName: 'kitchen',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2
    },
	{
	  locationId: 5,
      locationName: 'Hall',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('h_location', null, {});
  }
};
