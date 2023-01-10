'use strict';
const user = require('../db/models/user');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('h_user', [{
      emailId: 'training@neocepts.co.in', 
      password: '$2a$10$5VPrE4s3UAh.JzPZk8hbLuUCIRSKc5QsUYtbCOCyrFY8X/u1/T.gi',
      name: 'Neocepts training',
      mobileNumber: '9929920292',
      state:'Telangana',
      city:'Hyderabad*',
      street:'sri nagar colony',
      isUserValidated: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      emailId: 'heleo@neocepts.co.in',
      password: '$2a$10$5VPrE4s3UAh.JzPZk8hbLuUCIRSKc5QsUYtbCOCyrFY8X/u1/T.gi',
      name: 'Heleo Testing',
      mobileNumber: '9929920292',
      state:'Telangana',
      city:'Hyderabad*',
      street:'sri nagar colony',
      isUserValidated: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      emailId: 'prashant@neocepts.co.in',
      password: '$2a$10$5VPrE4s3UAh.JzPZk8hbLuUCIRSKc5QsUYtbCOCyrFY8X/u1/T.gi',
      name: 'Prashant',
      mobileNumber: '9929920292',
      state:'Telangana',
      city:'Eluru',
      street:'Gandhi nagar',
      isUserValidated: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('h_user', null, {});
  }
};
