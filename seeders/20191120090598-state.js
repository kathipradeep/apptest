'use strict';
const state = require('../db/models/state');
module.exports = {
  
  up: async(queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('h_state', 
	[
	{
		"stateId": 1,
		"state": "Andaman and Nicobar Islands",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 2,
		"state": "Andhra Pradesh",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 3,
		"state": "Arunachal Pradesh",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 4,
		"state": "Assam",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 5,
		"state": "Bihar",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 6,
		"state": "Chandigarh",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 7,
		"state": "Chhattisgarh",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 8,
		"state": "Dadra and Nagar Haveli",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 9,
		"state": "Delhi",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 10,
		"state": "Goa",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 11,
		"state": "Gujarat",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 12,
		"state": "Haryana",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 13,
		"state": "Himachal Pradesh",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 14,
		"state": "Jammu and Kashmir",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 15,
		"state": "Karnataka",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 16,
		"state": "Kerala",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 17,
		"state": "Madhya Pradesh",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 18,
		"state": "Maharashtra",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 19,
		"state": "Manipur",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 20,
		"state": "Meghalaya",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 21,
		"state": "Mizoram",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 22,
		"state": "Nagaland",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 23,
		"state": "Odisha",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 24,
		"state": "Puducherry",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 25,
		"state": "Punjab",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 26,
		"state": "Rajasthan",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 27,
		"state": "Tamil Nadu",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 28,
		"state": "Telangana",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 29,
		"state": "Tripura",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 30,
		"state": "Uttar Pradesh",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 31,
		"state": "West Bengal",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 32,
		"state": "Jharkhand",
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	{
		"stateId": 33,
		"state": "Uttarakhand",
		"createdAt": new Date(),
		"updatedAt": new Date()
	}

]
, {});
   
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('h_state', null, {});
    
  }
};