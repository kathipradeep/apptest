'use strict';
const state = require('../db/models/city');
module.exports = {
  
  up: async(queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('h_city', 
[
	{
		"cityId": 1,
		"city": "Port Blair*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 1
	},
	{
		"cityId": 2,
		"city": "Adoni",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 3,
		"city": "Amalapuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 4,
		"city": "Anakapalle",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 5,
		"city": "Anantapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 6,
		"city": "Bapatla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 7,
		"city": "Bheemunipatnam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 8,
		"city": "Bhimavaram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 9,
		"city": "Bobbili",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 10,
		"city": "Chilakaluripet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 11,
		"city": "Chirala",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 12,
		"city": "Chittoor",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 13,
		"city": "Dharmavaram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 14,
		"city": "Eluru",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 15,
		"city": "Gooty",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 16,
		"city": "Gudivada",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 17,
		"city": "Gudur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 18,
		"city": "Guntakal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 19,
		"city": "Guntur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 20,
		"city": "Hindupur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 21,
		"city": "Jaggaiahpet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 22,
		"city": "Jammalamadugu",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 23,
		"city": "Kadapa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 24,
		"city": "Kadiri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 25,
		"city": "Kakinada",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 26,
		"city": "Kandukur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 27,
		"city": "Kavali",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 28,
		"city": "Kovvur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 29,
		"city": "Kurnool",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 30,
		"city": "Macherla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 31,
		"city": "Machilipatnam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 32,
		"city": "Madanapalle",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 33,
		"city": "Mandapeta",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 34,
		"city": "Markapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 35,
		"city": "Nagari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 36,
		"city": "Naidupet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 37,
		"city": "Nandyal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 38,
		"city": "Narasapuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 39,
		"city": "Narasaraopet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 40,
		"city": "Narsipatnam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 41,
		"city": "Nellore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 42,
		"city": "Nidadavole",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 43,
		"city": "Nuzvid",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 44,
		"city": "Ongole",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 45,
		"city": "Palacole",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 46,
		"city": "Palasa Kasibugga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 47,
		"city": "Parvathipuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 48,
		"city": "Pedana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 49,
		"city": "Peddapuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 50,
		"city": "Pithapuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 51,
		"city": "Ponnur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 52,
		"city": "Proddatur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 53,
		"city": "Punganur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 54,
		"city": "Puttur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 55,
		"city": "Rajahmundry",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 56,
		"city": "Rajam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 57,
		"city": "Rajampet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 58,
		"city": "Ramachandrapuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 59,
		"city": "Rayachoti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 60,
		"city": "Rayadurg",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 61,
		"city": "Renigunta",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 62,
		"city": "Repalle",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 63,
		"city": "Salur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 64,
		"city": "Samalkot",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 65,
		"city": "Sattenapalle",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 66,
		"city": "Srikakulam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 67,
		"city": "Srikalahasti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 68,
		"city": "Srisailam Project (Right Flank Colony) Township",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 69,
		"city": "Sullurpeta",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 70,
		"city": "Tadepalligudem",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 71,
		"city": "Tadpatri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 72,
		"city": "Tanuku",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 73,
		"city": "Tenali",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 74,
		"city": "Tirupati",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 75,
		"city": "Tiruvuru",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 76,
		"city": "Tuni",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 77,
		"city": "Uravakonda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 78,
		"city": "Venkatagiri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 79,
		"city": "Vijayawada",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 80,
		"city": "Vinukonda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 81,
		"city": "Visakhapatnam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 82,
		"city": "Vizianagaram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 83,
		"city": "Yemmiganur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 84,
		"city": "Yerraguntla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 2
	},
	{
		"cityId": 85,
		"city": "Naharlagun",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 3
	},
	{
		"cityId": 86,
		"city": "Pasighat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 3
	},
	{
		"cityId": 87,
		"city": "Barpeta",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 88,
		"city": "Bongaigaon City",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 89,
		"city": "Dhubri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 90,
		"city": "Dibrugarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 91,
		"city": "Diphu",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 92,
		"city": "Goalpara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 93,
		"city": "Guwahati",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 94,
		"city": "Jorhat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 95,
		"city": "Karimganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 96,
		"city": "Lanka",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 97,
		"city": "Lumding",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 98,
		"city": "Mangaldoi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 99,
		"city": "Mankachar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 100,
		"city": "Margherita",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 101,
		"city": "Mariani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 102,
		"city": "Marigaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 103,
		"city": "Nagaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 104,
		"city": "Nalbari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 105,
		"city": "North Lakhimpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 106,
		"city": "Rangia",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 107,
		"city": "Sibsagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 108,
		"city": "Silapathar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 109,
		"city": "Silchar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 110,
		"city": "Tezpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 111,
		"city": "Tinsukia",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 4
	},
	{
		"cityId": 112,
		"city": "Araria",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 113,
		"city": "Arrah",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 114,
		"city": "Arwal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 115,
		"city": "Asarganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 116,
		"city": "Aurangabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 117,
		"city": "Bagaha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 118,
		"city": "Barh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 119,
		"city": "Begusarai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 120,
		"city": "Bettiah",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 121,
		"city": "Bhabua",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 122,
		"city": "Bhagalpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 123,
		"city": "Buxar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 124,
		"city": "Chhapra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 125,
		"city": "Darbhanga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 126,
		"city": "Dehri-on-Sone",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 127,
		"city": "Dumraon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 128,
		"city": "Forbesganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 129,
		"city": "Gaya",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 130,
		"city": "Gopalganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 131,
		"city": "Hajipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 132,
		"city": "Jamalpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 133,
		"city": "Jamui",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 134,
		"city": "Jehanabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 135,
		"city": "Katihar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 136,
		"city": "Kishanganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 137,
		"city": "Lakhisarai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 138,
		"city": "Lalganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 139,
		"city": "Madhepura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 140,
		"city": "Madhubani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 141,
		"city": "Maharajganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 142,
		"city": "Mahnar Bazar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 143,
		"city": "Makhdumpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 144,
		"city": "Maner",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 145,
		"city": "Manihari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 146,
		"city": "Marhaura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 147,
		"city": "Masaurhi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 148,
		"city": "Mirganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 149,
		"city": "Mokameh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 150,
		"city": "Motihari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 151,
		"city": "Motipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 152,
		"city": "Munger",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 153,
		"city": "Murliganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 154,
		"city": "Muzaffarpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 155,
		"city": "Narkatiaganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 156,
		"city": "Naugachhia",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 157,
		"city": "Nawada",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 158,
		"city": "Nokha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 159,
		"city": "Patna*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 160,
		"city": "Piro",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 161,
		"city": "Purnia",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 162,
		"city": "Rafiganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 163,
		"city": "Rajgir",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 164,
		"city": "Ramnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 165,
		"city": "Raxaul Bazar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 166,
		"city": "Revelganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 167,
		"city": "Rosera",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 168,
		"city": "Saharsa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 169,
		"city": "Samastipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 170,
		"city": "Sasaram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 171,
		"city": "Sheikhpura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 172,
		"city": "Sheohar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 173,
		"city": "Sherghati",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 174,
		"city": "Silao",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 175,
		"city": "Sitamarhi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 176,
		"city": "Siwan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 177,
		"city": "Sonepur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 178,
		"city": "Sugauli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 179,
		"city": "Sultanganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 180,
		"city": "Supaul",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 181,
		"city": "Warisaliganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 5
	},
	{
		"cityId": 182,
		"city": "Chandigarh*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 6
	},
	{
		"cityId": 183,
		"city": "Ambikapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 184,
		"city": "Bhatapara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 185,
		"city": "Bhilai Nagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 186,
		"city": "Bilaspur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 187,
		"city": "Chirmiri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 188,
		"city": "Dalli-Rajhara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 189,
		"city": "Dhamtari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 190,
		"city": "Durg",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 191,
		"city": "Jagdalpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 192,
		"city": "Korba",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 193,
		"city": "Mahasamund",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 194,
		"city": "Manendragarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 195,
		"city": "Mungeli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 196,
		"city": "Naila Janjgir",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 197,
		"city": "Raigarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 198,
		"city": "Raipur*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 199,
		"city": "Rajnandgaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 200,
		"city": "Sakti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 201,
		"city": "Tilda Newra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 7
	},
	{
		"cityId": 202,
		"city": "Silvassa*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 8
	},
	{
		"cityId": 203,
		"city": "Delhi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 9
	},
	{
		"cityId": 204,
		"city": "New Delhi*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 9
	},
	{
		"cityId": 205,
		"city": "Mapusa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 10
	},
	{
		"cityId": 206,
		"city": "Margao",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 10
	},
	{
		"cityId": 207,
		"city": "Marmagao",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 10
	},
	{
		"cityId": 208,
		"city": "Panaji*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 10
	},
	{
		"cityId": 209,
		"city": "Adalaj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 210,
		"city": "Ahmedabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 211,
		"city": "Amreli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 212,
		"city": "Anand",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 213,
		"city": "Anjar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 214,
		"city": "Ankleshwar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 215,
		"city": "Bharuch",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 216,
		"city": "Bhavnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 217,
		"city": "Bhuj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 218,
		"city": "Chhapra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 219,
		"city": "Deesa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 220,
		"city": "Dhoraji",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 221,
		"city": "Godhra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 222,
		"city": "Jamnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 223,
		"city": "Kadi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 224,
		"city": "Kapadvanj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 225,
		"city": "Keshod",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 226,
		"city": "Khambhat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 227,
		"city": "Lathi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 228,
		"city": "Limbdi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 229,
		"city": "Lunawada",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 230,
		"city": "Mahesana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 231,
		"city": "Mahuva",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 232,
		"city": "Manavadar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 233,
		"city": "Mandvi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 234,
		"city": "Mangrol",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 235,
		"city": "Mansa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 236,
		"city": "Mahemdabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 237,
		"city": "Modasa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 238,
		"city": "Morvi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 239,
		"city": "Nadiad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 240,
		"city": "Navsari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 241,
		"city": "Padra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 242,
		"city": "Palanpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 243,
		"city": "Palitana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 244,
		"city": "Pardi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 245,
		"city": "Patan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 246,
		"city": "Petlad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 247,
		"city": "Porbandar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 248,
		"city": "Radhanpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 249,
		"city": "Rajkot",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 250,
		"city": "Rajpipla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 251,
		"city": "Rajula",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 252,
		"city": "Ranavav",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 253,
		"city": "Rapar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 254,
		"city": "Salaya",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 255,
		"city": "Sanand",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 256,
		"city": "Savarkundla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 257,
		"city": "Sidhpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 258,
		"city": "Sihor",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 259,
		"city": "Songadh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 260,
		"city": "Surat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 261,
		"city": "Talaja",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 262,
		"city": "Thangadh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 263,
		"city": "Tharad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 264,
		"city": "Umbergaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 265,
		"city": "Umreth",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 266,
		"city": "Una",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 267,
		"city": "Unjha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 268,
		"city": "Upleta",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 269,
		"city": "Vadnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 270,
		"city": "Vadodara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 271,
		"city": "Valsad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 272,
		"city": "Vapi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 273,
		"city": "Vapi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 274,
		"city": "Veraval",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 275,
		"city": "Vijapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 276,
		"city": "Viramgam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 277,
		"city": "Visnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 278,
		"city": "Vyara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 279,
		"city": "Wadhwan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 280,
		"city": "Wankaner",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 11
	},
	{
		"cityId": 281,
		"city": "Bahadurgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 282,
		"city": "Bhiwani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 283,
		"city": "CharkhiDadri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 284,
		"city": "Faridabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 285,
		"city": "Fatehabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 286,
		"city": "Gohana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 287,
		"city": "Gurgaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 288,
		"city": "Hansi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 289,
		"city": "Hisar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 290,
		"city": "Jind",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 291,
		"city": "Kaithal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 292,
		"city": "Karnal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 293,
		"city": "Ladwa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 294,
		"city": "Mahendragarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 295,
		"city": "Mandi Dabwali",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 296,
		"city": "Narnaul",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 297,
		"city": "Narwana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 298,
		"city": "Palwal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 299,
		"city": "Panchkula",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 300,
		"city": "Panipat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 301,
		"city": "Pehowa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 302,
		"city": "Pinjore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 303,
		"city": "Rania",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 304,
		"city": "Ratia",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 305,
		"city": "Rewari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 306,
		"city": "Rohtak",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 307,
		"city": "Safidon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 308,
		"city": "Samalkha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 309,
		"city": "Sarsod",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 310,
		"city": "Shahbad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 311,
		"city": "Sirsa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 312,
		"city": "Sohna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 313,
		"city": "Sonipat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 314,
		"city": "Taraori",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 315,
		"city": "Thanesar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 316,
		"city": "Tohana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 317,
		"city": "Yamunanagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 12
	},
	{
		"cityId": 318,
		"city": "Mandi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 13
	},
	{
		"cityId": 319,
		"city": "Nahan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 13
	},
	{
		"cityId": 320,
		"city": "Palampur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 13
	},
	{
		"cityId": 321,
		"city": "Shimla*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 13
	},
	{
		"cityId": 322,
		"city": "Solan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 13
	},
	{
		"cityId": 323,
		"city": "Sundarnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 13
	},
	{
		"cityId": 324,
		"city": "Anantnag",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 14
	},
	{
		"cityId": 325,
		"city": "Baramula",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 14
	},
	{
		"cityId": 326,
		"city": "Jammu",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 14
	},
	{
		"cityId": 327,
		"city": "Kathua",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 14
	},
	{
		"cityId": 328,
		"city": "Punch",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 14
	},
	{
		"cityId": 329,
		"city": "Rajauri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 14
	},
	{
		"cityId": 330,
		"city": "Sopore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 14
	},
	{
		"cityId": 331,
		"city": "Srinagar*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 14
	},
	{
		"cityId": 332,
		"city": "Udhampur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 14
	},
	{
		"cityId": 333,
		"city": "Adyar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 334,
		"city": "Afzalpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 335,
		"city": "Arsikere",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 336,
		"city": "Athni",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 337,
		"city": "Bengaluru",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 338,
		"city": "Belagavi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 339,
		"city": "Ballari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 340,
		"city": "Chikkamagaluru",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 341,
		"city": "Davanagere",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 342,
		"city": "Gokak",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 343,
		"city": "Hubli-Dharwad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 344,
		"city": "Karwar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 345,
		"city": "Kolar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 346,
		"city": "Lakshmeshwar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 347,
		"city": "Lingsugur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 348,
		"city": "Maddur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 349,
		"city": "Madhugiri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 350,
		"city": "Madikeri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 351,
		"city": "Magadi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 352,
		"city": "Mahalingapura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 353,
		"city": "Malavalli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 354,
		"city": "Malur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 355,
		"city": "Mandya",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 356,
		"city": "Mangaluru",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 357,
		"city": "Manvi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 358,
		"city": "Mudalagi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 359,
		"city": "Mudabidri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 360,
		"city": "Muddebihal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 361,
		"city": "Mudhol",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 362,
		"city": "Mulbagal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 363,
		"city": "Mundargi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 364,
		"city": "Nanjangud",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 365,
		"city": "Nargund",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 366,
		"city": "Navalgund",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 367,
		"city": "Nelamangala",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 368,
		"city": "Pavagada",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 369,
		"city": "Piriyapatna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 370,
		"city": "Puttur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 371,
		"city": "Rabkavi Banhatti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 372,
		"city": "Raayachuru",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 373,
		"city": "Ranebennuru",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 374,
		"city": "Ramanagaram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 375,
		"city": "Ramdurg",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 376,
		"city": "Ranibennur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 377,
		"city": "Robertson Pet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 378,
		"city": "Ron",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 379,
		"city": "Sadalagi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 380,
		"city": "Sagara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 381,
		"city": "Sakaleshapura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 382,
		"city": "Sindagi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 383,
		"city": "Sanduru",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 384,
		"city": "Sankeshwara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 385,
		"city": "Saundatti-Yellamma",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 386,
		"city": "Savanur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 387,
		"city": "Sedam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 388,
		"city": "Shahabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 389,
		"city": "Shahpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 390,
		"city": "Shiggaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 391,
		"city": "Shikaripur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 392,
		"city": "Shivamogga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 393,
		"city": "Surapura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 394,
		"city": "Shrirangapattana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 395,
		"city": "Sidlaghatta",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 396,
		"city": "Sindhagi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 397,
		"city": "Sindhnur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 398,
		"city": "Sira",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 399,
		"city": "Sirsi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 400,
		"city": "Siruguppa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 401,
		"city": "Srinivaspur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 402,
		"city": "Tarikere",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 403,
		"city": "Tekkalakote",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 404,
		"city": "Terdal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 405,
		"city": "Talikota",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 406,
		"city": "Tiptur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 407,
		"city": "Tumkur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 408,
		"city": "Udupi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 409,
		"city": "Vijayapura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 410,
		"city": "Wadi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 411,
		"city": "Yadgir",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 412,
		"city": "Mysore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 15
	},
	{
		"cityId": 413,
		"city": "Adoor",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 414,
		"city": "Alappuzha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 415,
		"city": "Attingal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 416,
		"city": "Chalakudy",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 417,
		"city": "Changanassery",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 418,
		"city": "Cherthala",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 419,
		"city": "Chittur-Thathamangalam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 420,
		"city": "Guruvayoor",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 421,
		"city": "Kanhangad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 422,
		"city": "Kannur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 423,
		"city": "Kasaragod",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 424,
		"city": "Kayamkulam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 425,
		"city": "Kochi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 426,
		"city": "Kodungallur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 427,
		"city": "Kollam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 428,
		"city": "Kottayam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 429,
		"city": "Kozhikode",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 430,
		"city": "Kunnamkulam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 431,
		"city": "Malappuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 432,
		"city": "Mattannur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 433,
		"city": "Mavelikkara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 434,
		"city": "Mavoor",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 435,
		"city": "Muvattupuzha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 436,
		"city": "Nedumangad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 437,
		"city": "Neyyattinkara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 438,
		"city": "Nilambur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 439,
		"city": "Ottappalam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 440,
		"city": "Palai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 441,
		"city": "Palakkad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 442,
		"city": "Panamattom",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 443,
		"city": "Panniyannur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 444,
		"city": "Pappinisseri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 445,
		"city": "Paravoor",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 446,
		"city": "Pathanamthitta",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 447,
		"city": "Peringathur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 448,
		"city": "Perinthalmanna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 449,
		"city": "Perumbavoor",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 450,
		"city": "Ponnani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 451,
		"city": "Punalur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 452,
		"city": "Puthuppally",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 453,
		"city": "Koyilandy",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 454,
		"city": "Shoranur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 455,
		"city": "Taliparamba",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 456,
		"city": "Thiruvalla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 457,
		"city": "Thiruvananthapuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 458,
		"city": "Thodupuzha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 459,
		"city": "Thrissur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 460,
		"city": "Tirur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 461,
		"city": "Vaikom",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 462,
		"city": "Varkala",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 463,
		"city": "Vatakara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 16
	},
	{
		"cityId": 464,
		"city": "Alirajpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 465,
		"city": "AshokNagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 466,
		"city": "Balaghat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 467,
		"city": "Bhopal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 468,
		"city": "Ganjbasoda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 469,
		"city": "Gwalior",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 470,
		"city": "Indore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 471,
		"city": "Itarsi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 472,
		"city": "Jabalpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 473,
		"city": "Lahar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 474,
		"city": "Maharajpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 475,
		"city": "Mahidpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 476,
		"city": "Maihar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 477,
		"city": "MalajKhand",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 478,
		"city": "Manasa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 479,
		"city": "Manawar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 480,
		"city": "Mandideep",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 481,
		"city": "Mandla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 482,
		"city": "Mandsaur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 483,
		"city": "Mauganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 484,
		"city": "Mhow Cantonment",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 485,
		"city": "Mhowgaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 486,
		"city": "Morena",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 487,
		"city": "Multai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 488,
		"city": "Mundi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 489,
		"city": "Murwara(Katni)",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 490,
		"city": "Nagda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 491,
		"city": "Nainpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 492,
		"city": "Narsinghgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
/*	{
 		"cityId": 493,
		"city": "Narsinghgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	}, */
	{
		"cityId": 494,
		"city": "Neemuch",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 495,
		"city": "Nepanagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 496,
		"city": "Niwari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 497,
		"city": "Nowgong",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 498,
		"city": "Nowrozabad(Khodargama)",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 499,
		"city": "Pachore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 500,
		"city": "Pali",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 501,
		"city": "Panagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 502,
		"city": "Pandhurna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 503,
		"city": "Panna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 504,
		"city": "Pasan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 505,
		"city": "Pipariya",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 506,
		"city": "Pithampur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 507,
		"city": "Porsa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 508,
		"city": "Prithvipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 509,
		"city": "RaghogarhVijaypur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 510,
		"city": "Rahatgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 511,
		"city": "Raisen",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 512,
		"city": "Rajgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 513,
		"city": "Ratlam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 514,
		"city": "Rau",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 515,
		"city": "Rehli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 516,
		"city": "Rewa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 517,
		"city": "Sabalgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 518,
		"city": "Sagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 519,
		"city": "Sanawad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 520,
		"city": "Sarangpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 521,
		"city": "Sarni",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 522,
		"city": "Satna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 523,
		"city": "Sausar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 524,
		"city": "Sehore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 525,
		"city": "Sendhwa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 526,
		"city": "Seoni",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 527,
		"city": "Seoni Malwa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 528,
		"city": "Shahdol",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 529,
		"city": "Shajapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 530,
		"city": "Shamgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 531,
		"city": "Sheopur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 532,
		"city": "Shivpuri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 533,
		"city": "Shujalpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 534,
		"city": "Sidhi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 535,
		"city": "Sihora",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 536,
		"city": "Singrauli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 537,
		"city": "Sironj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 538,
		"city": "Sohagpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 539,
		"city": "Tarana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 540,
		"city": "Tikamgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 541,
		"city": "Ujjain",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 542,
		"city": "Umaria",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 543,
		"city": "Vidisha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 544,
		"city": "Vijaypur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 545,
		"city": "Wara Seoni",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 17
	},
	{
		"cityId": 546,
		"city": "Ahmednagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 547,
		"city": "Akola",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 548,
		"city": "Akot",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 549,
		"city": "Amalner",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 550,
		"city": "Ambejogai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 551,
		"city": "Amravati",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 552,
		"city": "Anjangaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 553,
		"city": "Arvi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 554,
		"city": "Aurangabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 555,
		"city": "Bhiwandi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 556,
		"city": "Dhule",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 557,
		"city": "Kalyan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 558,
		"city": "Ichalkaranji",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 559,
		"city": "Dombivali",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 560,
		"city": "Karjat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 561,
		"city": "Latur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 562,
		"city": "Loha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 563,
		"city": "Lonar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 564,
		"city": "Lonavla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 565,
		"city": "Mahad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 566,
		"city": "Malegaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 567,
		"city": "Malkapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 568,
		"city": "Mangalvedhe",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 569,
		"city": "Mangrulpir",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 570,
		"city": "Manjlegaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 571,
		"city": "Manmad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 572,
		"city": "Manwath",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 573,
		"city": "Mehkar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 574,
		"city": "Mhaswad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 575,
		"city": "Mira-Bhayandar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 576,
		"city": "Morshi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 577,
		"city": "Mukhed",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 578,
		"city": "Mul",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 579,
		"city": "Greater Mumbai*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 580,
		"city": "Murtijapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 581,
		"city": "Nagpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 582,
		"city": "Nanded-Waghala",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 583,
		"city": "Nandgaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 584,
		"city": "Nandura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 585,
		"city": "Nandurbar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 586,
		"city": "Narkhed",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 587,
		"city": "Nashik",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 588,
		"city": "Navi Mumbai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 589,
		"city": "Nawapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 590,
		"city": "Nilanga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 591,
		"city": "Osmanabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 592,
		"city": "Ozar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 593,
		"city": "Pachora",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 594,
		"city": "Paithan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 595,
		"city": "Palghar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 596,
		"city": "Pandharkaoda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 597,
		"city": "Pandharpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 598,
		"city": "Panvel",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 599,
		"city": "Parbhani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 600,
		"city": "Parli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 601,
		"city": "Partur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 602,
		"city": "Pathardi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 603,
		"city": "Pathri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 604,
		"city": "Patur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 605,
		"city": "Pauni",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 606,
		"city": "Pen",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 607,
		"city": "Phaltan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 608,
		"city": "Pulgaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 609,
		"city": "Pune",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 610,
		"city": "Purna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 611,
		"city": "Pusad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 612,
		"city": "Rahuri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 613,
		"city": "Rajura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 614,
		"city": "Ramtek",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 615,
		"city": "Ratnagiri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 616,
		"city": "Raver",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 617,
		"city": "Risod",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 618,
		"city": "Sailu",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 619,
		"city": "Sangamner",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 620,
		"city": "Sangli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 621,
		"city": "Sangole",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 622,
		"city": "Sasvad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 623,
		"city": "Satana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 624,
		"city": "Satara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 625,
		"city": "Savner",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 626,
		"city": "Sawantwadi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 627,
		"city": "Shahade",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 628,
		"city": "Shegaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 629,
		"city": "Shendurjana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 630,
		"city": "Shirdi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 631,
		"city": "Shirpur-Warwade",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 632,
		"city": "Shirur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 633,
		"city": "Shrigonda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 634,
		"city": "Shrirampur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 635,
		"city": "Sillod",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 636,
		"city": "Sinnar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 637,
		"city": "Solapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 638,
		"city": "Soyagaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 639,
		"city": "Talegaon Dabhade",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 640,
		"city": "Talode",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 641,
		"city": "Tasgaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 642,
		"city": "Thane",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 643,
		"city": "Tirora",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 644,
		"city": "Tuljapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 645,
		"city": "Tumsar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 646,
		"city": "Uchgaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 647,
		"city": "Udgir",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 648,
		"city": "Umarga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 649,
		"city": "Umarkhed",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 650,
		"city": "Umred",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 651,
		"city": "Uran",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 652,
		"city": "Uran Islampur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 653,
		"city": "Vadgaon Kasba",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 654,
		"city": "Vaijapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 655,
		"city": "Vasai-Virar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 656,
		"city": "Vita",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 657,
		"city": "Wadgaon Road",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 658,
		"city": "Wai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 659,
		"city": "Wani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 660,
		"city": "Wardha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 661,
		"city": "Warora",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 662,
		"city": "Warud",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 663,
		"city": "Washim",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 664,
		"city": "Yavatmal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 665,
		"city": "Yawal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 666,
		"city": "Yevla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 18
	},
	{
		"cityId": 667,
		"city": "Imphal*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 19
	},
	{
		"cityId": 668,
		"city": "Lilong",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 19
	},
	{
		"cityId": 669,
		"city": "Mayang Imphal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 19
	},
	{
		"cityId": 670,
		"city": "Thoubal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 19
	},
	{
		"cityId": 671,
		"city": "Nongstoin",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 20
	},
	{
		"cityId": 672,
		"city": "Shillong*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 20
	},
	{
		"cityId": 673,
		"city": "Tura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 20
	},
	{
		"cityId": 674,
		"city": "Aizawl",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 21
	},
	{
		"cityId": 675,
		"city": "Lunglei",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 21
	},
	{
		"cityId": 676,
		"city": "Saiha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 21
	},
	{
		"cityId": 677,
		"city": "Dimapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 22
	},
	{
		"cityId": 678,
		"city": "Kohima*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 22
	},
	{
		"cityId": 679,
		"city": "Mokokchung",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 22
	},
	{
		"cityId": 680,
		"city": "Tuensang",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 22
	},
	{
		"cityId": 681,
		"city": "Wokha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 22
	},
	{
		"cityId": 682,
		"city": "Zunheboto",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 22
	},
	{
		"cityId": 683,
		"city": "Balangir",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 684,
		"city": "Baleshwar Town",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 685,
		"city": "Barbil",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 686,
		"city": "Bargarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 687,
		"city": "Baripada Town",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 688,
		"city": "Bhadrak",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 689,
		"city": "Bhawanipatna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 690,
		"city": "Bhubaneswar*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 691,
		"city": "Brahmapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 692,
		"city": "Byasanagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 693,
		"city": "Cuttack",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 694,
		"city": "Dhenkanal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 695,
		"city": "Jatani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 696,
		"city": "Jharsuguda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 697,
		"city": "Kendrapara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 698,
		"city": "Kendujhar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 699,
		"city": "Malkangiri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 700,
		"city": "Nabarangapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 701,
		"city": "Paradip",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 702,
		"city": "Parlakhemundi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 703,
		"city": "Pattamundai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 704,
		"city": "Phulabani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 705,
		"city": "Puri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 706,
		"city": "Rairangpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 707,
		"city": "Rajagangapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 708,
		"city": "Raurkela",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 709,
		"city": "Rayagada",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 710,
		"city": "Sambalpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 711,
		"city": "Soro",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 712,
		"city": "Sunabeda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 713,
		"city": "Sundargarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 714,
		"city": "Talcher",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 715,
		"city": "Tarbha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 716,
		"city": "Titlagarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 23
	},
	{
		"cityId": 717,
		"city": "Karaikal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 24
	},
	{
		"cityId": 718,
		"city": "Mahe",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 24
	},
	{
		"cityId": 719,
		"city": "Pondicherry*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 24
	},
	{
		"cityId": 720,
		"city": "Yanam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 24
	},
	{
		"cityId": 721,
		"city": "Amritsar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 722,
		"city": "Barnala",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 723,
		"city": "Batala",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 724,
		"city": "Bathinda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 725,
		"city": "Dhuri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 726,
		"city": "Faridkot",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 727,
		"city": "Fazilka",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 728,
		"city": "Firozpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 729,
		"city": "Firozpur Cantt.",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 730,
		"city": "Gobindgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 731,
		"city": "Gurdaspur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 732,
		"city": "Hoshiarpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 733,
		"city": "Jagraon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 734,
		"city": "JalandharCantt.",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 735,
		"city": "Jalandhar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 736,
		"city": "Kapurthala",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 737,
		"city": "Khanna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 738,
		"city": "Kharar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 739,
		"city": "KotKapura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 740,
		"city": "Longowal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 741,
		"city": "Ludhiana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 742,
		"city": "Malerkotla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 743,
		"city": "Malout",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 744,
		"city": "Mansa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 745,
		"city": "Moga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 746,
		"city": "Mohali",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 747,
		"city": "Morinda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 748,
		"city": "Mukerian",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 749,
		"city": "Muktsar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 750,
		"city": "Nabha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 751,
		"city": "Nakodar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 752,
		"city": "Nangal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 753,
		"city": "Nawanshahr",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 754,
		"city": "Pathankot",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 755,
		"city": "Patiala",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 756,
		"city": "Pattran",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 757,
		"city": "Patti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 758,
		"city": "Phagwara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 759,
		"city": "Phillaur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 760,
		"city": "Qadian",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 761,
		"city": "Raikot",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 762,
		"city": "Rajpura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 763,
		"city": "Rampura Phul",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 764,
		"city": "Rupnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 765,
		"city": "Samana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 766,
		"city": "Sangrur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 767,
		"city": "Sirhind Fatehgarh Sahib",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 768,
		"city": "Sujanpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 769,
		"city": "Sunam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 770,
		"city": "Talwara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 771,
		"city": "TarnTaran",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 772,
		"city": "Urmar Tanda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 773,
		"city": "Zira",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 774,
		"city": "Zirakpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 25
	},
	{
		"cityId": 775,
		"city": "Ajmer",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 776,
		"city": "Alwar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 777,
		"city": "Bikaner",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 778,
		"city": "Bharatpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 779,
		"city": "Bhilwara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 780,
		"city": "Jaipur*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 781,
		"city": "Jodhpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 782,
		"city": "Lachhmangarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 783,
		"city": "Ladnu",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 784,
		"city": "Lakheri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 785,
		"city": "Lalsot",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 786,
		"city": "Losal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 787,
		"city": "Makrana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 788,
		"city": "Malpura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 789,
		"city": "Mandalgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 790,
		"city": "Mandawa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 791,
		"city": "Mangrol",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 792,
		"city": "Merta City",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 793,
		"city": "Mount Abu",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 794,
		"city": "Nadbai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 795,
		"city": "Nagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 796,
		"city": "Nagaur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 797,
		"city": "Nasirabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 798,
		"city": "Nathdwara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 799,
		"city": "Neem-Ka-Thana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 800,
		"city": "Nimbahera",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 801,
		"city": "Nohar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 802,
		"city": "Nokha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 803,
		"city": "Pali",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 804,
		"city": "Phalodi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 805,
		"city": "Phulera",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 806,
		"city": "Pilani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 807,
		"city": "Pilibanga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 808,
		"city": "Pindwara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 809,
		"city": "Pipar City",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 810,
		"city": "Prantij",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 811,
		"city": "Pratapgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 812,
		"city": "Raisinghnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 813,
		"city": "Rajakhera",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 814,
		"city": "Rajaldesar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 815,
		"city": "Rajgarh (Alwar)",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 816,
		"city": "Rajgarh (Churu)",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 817,
		"city": "Rajsamand",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 818,
		"city": "Ramganj Mandi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 819,
		"city": "Ramngarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 820,
		"city": "Ratangarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 821,
		"city": "Rawatbhata",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 822,
		"city": "Rawatsar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 823,
		"city": "Reengus",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 824,
		"city": "Sadri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 825,
		"city": "Sadulshahar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 826,
		"city": "Sadulpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 827,
		"city": "Sagwara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 828,
		"city": "Sambhar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 829,
		"city": "Sanchore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 830,
		"city": "Sangaria",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 831,
		"city": "Sardarshahar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 832,
		"city": "Sawai Madhopur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
/* 	{
		"cityId": 833,
		"city": "Shahpura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	}, */
	{
		"cityId": 834,
		"city": "Shahpura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 835,
		"city": "Sheoganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 836,
		"city": "Sikar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 837,
		"city": "Sirohi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 838,
		"city": "Sojat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 839,
		"city": "Sri Madhopur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 840,
		"city": "Sujangarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 841,
		"city": "Sumerpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 842,
		"city": "Suratgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 843,
		"city": "Taranagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 844,
		"city": "Todabhim",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 845,
		"city": "Todaraisingh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 846,
		"city": "Tonk",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 847,
		"city": "Udaipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 848,
		"city": "Udaipurwati",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 849,
		"city": "Vijainagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 26
	},
	{
		"cityId": 850,
		"city": "Arakkonam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 851,
		"city": "Aruppukkottai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 852,
		"city": "Chennai*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 853,
		"city": "Coimbatore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 854,
		"city": "Erode",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 855,
		"city": "Gobichettipalayam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 856,
		"city": "Kancheepuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 857,
		"city": "Karur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 858,
		"city": "Lalgudi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 859,
		"city": "Madurai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 860,
		"city": "Manachanallur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 861,
		"city": "Nagapattinam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 862,
		"city": "Nagercoil",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 863,
		"city": "Namagiripettai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 864,
		"city": "Namakkal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 865,
		"city": "Nandivaram-Guduvancheri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 866,
		"city": "Nanjikottai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 867,
		"city": "Natham",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 868,
		"city": "Nellikuppam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 869,
		"city": "Neyveli (TS)",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 870,
		"city": "O'Valley",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 871,
		"city": "Oddanchatram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 872,
		"city": "P.N.Patti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 873,
		"city": "Pacode",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 874,
		"city": "Padmanabhapuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 875,
		"city": "Palani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 876,
		"city": "Palladam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 877,
		"city": "Pallapatti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 878,
		"city": "Pallikonda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 879,
		"city": "Panagudi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 880,
		"city": "Panruti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 881,
		"city": "Paramakudi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 882,
		"city": "Parangipettai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 883,
		"city": "Pattukkottai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 884,
		"city": "Perambalur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 885,
		"city": "Peravurani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 886,
		"city": "Periyakulam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 887,
		"city": "Periyasemur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 888,
		"city": "Pernampattu",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 889,
		"city": "Pollachi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 890,
		"city": "Polur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 891,
		"city": "Ponneri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 892,
		"city": "Pudukkottai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 893,
		"city": "Pudupattinam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 894,
		"city": "Puliyankudi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 895,
		"city": "Punjaipugalur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 896,
		"city": "Ranipet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 897,
		"city": "Rajapalayam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 898,
		"city": "Ramanathapuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 899,
		"city": "Rameshwaram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 900,
		"city": "Rasipuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 901,
		"city": "Salem",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 902,
		"city": "Sankarankoil",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 903,
		"city": "Sankari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 904,
		"city": "Sathyamangalam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 905,
		"city": "Sattur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 906,
		"city": "Shenkottai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 907,
		"city": "Sholavandan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 908,
		"city": "Sholingur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 909,
		"city": "Sirkali",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 910,
		"city": "Sivaganga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 911,
		"city": "Sivagiri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 912,
		"city": "Sivakasi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 913,
		"city": "Srivilliputhur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 914,
		"city": "Surandai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 915,
		"city": "Suriyampalayam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 916,
		"city": "Tenkasi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 917,
		"city": "Thammampatti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 918,
		"city": "Thanjavur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 919,
		"city": "Tharamangalam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 920,
		"city": "Tharangambadi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 921,
		"city": "TheniAllinagaram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 922,
		"city": "Thirumangalam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 923,
		"city": "Thirupuvanam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 924,
		"city": "Thiruthuraipoondi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 925,
		"city": "Thiruvallur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 926,
		"city": "Thiruvarur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 927,
		"city": "Thuraiyur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 928,
		"city": "Tindivanam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 929,
		"city": "Tiruchendur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 930,
		"city": "Tiruchengode",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 931,
		"city": "Tiruchirappalli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 932,
		"city": "Tirukalukundram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 933,
		"city": "Tirukkoyilur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 934,
		"city": "Tirunelveli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
/* 	{
		"cityId": 935,
		"city": "Tirupathur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	}, */
	{
		"cityId": 936,
		"city": "Tirupathur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 937,
		"city": "Tiruppur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 938,
		"city": "Tiruttani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 939,
		"city": "Tiruvannamalai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 940,
		"city": "Tiruvethipuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 941,
		"city": "Tittakudi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 942,
		"city": "Udhagamandalam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 943,
		"city": "Udumalaipettai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 944,
		"city": "Unnamalaikadai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 945,
		"city": "Usilampatti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 946,
		"city": "Uthamapalayam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 947,
		"city": "Uthiramerur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 948,
		"city": "Vadakkuvalliyur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 949,
		"city": "Vadalur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 950,
		"city": "Vadipatti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 951,
		"city": "Valparai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 952,
		"city": "Vandavasi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 953,
		"city": "Vaniyambadi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 954,
		"city": "Vedaranyam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 955,
		"city": "Vellakoil",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 956,
		"city": "Vellore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 957,
		"city": "Vikramasingapuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 958,
		"city": "Viluppuram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 959,
		"city": "Virudhachalam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 960,
		"city": "Virudhunagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 961,
		"city": "Viswanatham",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 27
	},
	{
		"cityId": 962,
		"city": "Adilabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 963,
		"city": "Bellampalle",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 964,
		"city": "Bhadrachalam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 965,
		"city": "Bhainsa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 966,
		"city": "Bhongir",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 967,
		"city": "Bodhan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 968,
		"city": "Farooqnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 969,
		"city": "Gadwal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 970,
		"city": "Hyderabad*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 971,
		"city": "Jagtial",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 972,
		"city": "Jangaon",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 973,
		"city": "Kagaznagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 974,
		"city": "Kamareddy",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 975,
		"city": "Karimnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 976,
		"city": "Khammam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 977,
		"city": "Koratla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 978,
		"city": "Kothagudem",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 979,
		"city": "Kyathampalle",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 980,
		"city": "Mahbubnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 981,
		"city": "Mancherial",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 982,
		"city": "Mandamarri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 983,
		"city": "Manuguru",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 984,
		"city": "Medak",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 985,
		"city": "Miryalaguda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 986,
		"city": "Nagarkurnool",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 987,
		"city": "Narayanpet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 988,
		"city": "Nirmal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 989,
		"city": "Nizamabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 990,
		"city": "Palwancha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 991,
		"city": "Ramagundam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 992,
		"city": "Sadasivpet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 993,
		"city": "Sangareddy",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 994,
		"city": "Siddipet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 995,
		"city": "Sircilla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 996,
		"city": "Suryapet",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 997,
		"city": "Tandur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 998,
		"city": "Vikarabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 999,
		"city": "Wanaparthy",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 1000,
		"city": "Warangal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 1001,
		"city": "Yellandu",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 28
	},
	{
		"cityId": 1002,
		"city": "Agartala*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 29
	},
	{
		"cityId": 1003,
		"city": "Belonia",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 29
	},
	{
		"cityId": 1004,
		"city": "Dharmanagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 29
	},
	{
		"cityId": 1005,
		"city": "Kailasahar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 29
	},
	{
		"cityId": 1006,
		"city": "Khowai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 29
	},
	{
		"cityId": 1007,
		"city": "Pratapgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 29
	},
	{
		"cityId": 1008,
		"city": "Udaipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 29
	},
	{
		"cityId": 1009,
		"city": "Achhnera",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1010,
		"city": "Agra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1011,
		"city": "Aligarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1012,
		"city": "Allahabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1013,
		"city": "Amroha",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1014,
		"city": "Azamgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1015,
		"city": "Bahraich",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1016,
		"city": "Chandausi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1017,
		"city": "Etawah",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1018,
		"city": "Firozabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1019,
		"city": "FatehpurSikri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1020,
		"city": "Hapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1021,
		"city": "Hardoi*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1022,
		"city": "Jhansi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1023,
		"city": "Kalpi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1024,
		"city": "Kanpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1025,
		"city": "Khair",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1026,
		"city": "Laharpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1027,
		"city": "Lakhimpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1028,
		"city": "Lal Gopalganj Nindaura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1029,
		"city": "Lalitpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1030,
		"city": "Lalganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1031,
		"city": "Lar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1032,
		"city": "Loni",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1033,
		"city": "Lucknow*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1034,
		"city": "Mathura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1035,
		"city": "Meerut",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1036,
		"city": "Modinagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1037,
		"city": "Moradabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1038,
		"city": "Nagina",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1039,
		"city": "Najibabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1040,
		"city": "Nakur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1041,
		"city": "Nanpara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1042,
		"city": "Naraura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1043,
		"city": "NaugawanSadat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1044,
		"city": "Nautanwa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1045,
		"city": "Nawabganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1046,
		"city": "Nehtaur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1047,
		"city": "Niwai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1048,
		"city": "Noida",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1049,
		"city": "Noorpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1050,
		"city": "Obra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1051,
		"city": "Orai",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1052,
		"city": "Padrauna",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1053,
		"city": "PaliaKalan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1054,
		"city": "Parasi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1055,
		"city": "Phulpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1056,
		"city": "Pihani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1057,
		"city": "Pilibhit",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1058,
		"city": "Pilkhuwa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1059,
		"city": "Powayan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1060,
		"city": "Pukhrayan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1061,
		"city": "Puranpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1062,
		"city": "Purquazi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1063,
		"city": "Purwa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1064,
		"city": "RaeBareli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1065,
		"city": "Rampur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1066,
		"city": "Rampur Maniharan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
/* 	{
		"cityId": 1067,
		"city": "RampurManiharan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	}, */
	{
		"cityId": 1068,
		"city": "Rasra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1069,
		"city": "Rath",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1070,
		"city": "Renukoot",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1071,
		"city": "Reoti",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1072,
		"city": "Robertsganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1073,
		"city": "Rudauli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1074,
		"city": "Rudrapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1075,
		"city": "Sadabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1076,
		"city": "Safipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1077,
		"city": "Saharanpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1078,
		"city": "Sahaspur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1079,
		"city": "Sahaswan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1080,
		"city": "Sahawar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1081,
		"city": "Sahjanwa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1082,
		"city": "Saidpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1083,
		"city": "Sambhal",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1084,
		"city": "Samdhan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1085,
		"city": "Samthar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1086,
		"city": "Sandi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1087,
		"city": "Sandila",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1088,
		"city": "Sardhana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1089,
		"city": "Seohara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1090,
		"city": "Shahabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1091,
		"city": "Hardoi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1092,
		"city": "Shahabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1093,
		"city": "Rampur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1094,
		"city": "Shahganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1095,
		"city": "Shahjahanpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1096,
		"city": "Shamli",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1097,
		"city": "Shamsabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1098,
		"city": "Agra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1099,
		"city": "Shamsabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1100,
		"city": "Farrukhabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1101,
		"city": "Sherkot",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1102,
		"city": "Shikarpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1103,
		"city": "Bulandshahr",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1104,
		"city": "Shikohabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1105,
		"city": "Shishgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1106,
		"city": "Siana",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1107,
		"city": "Sikanderpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1108,
		"city": "SikandraRao",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1109,
		"city": "Sikandrabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1110,
		"city": "Sirsaganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1111,
		"city": "Sirsi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1112,
		"city": "Sitapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1113,
		"city": "Soron",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1114,
		"city": "Suar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1115,
		"city": "Sultanpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1116,
		"city": "Sumerpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1117,
		"city": "Tanda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1118,
		"city": "Thakurdwara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1119,
		"city": "ThanaBhawan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1120,
		"city": "Tilhar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1121,
		"city": "Tirwaganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1122,
		"city": "Tulsipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1123,
		"city": "Tundla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1124,
		"city": "Ujhani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1125,
		"city": "Unnao",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1126,
		"city": "Utraula",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1127,
		"city": "Varanasi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1128,
		"city": "Vrindavan",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1129,
		"city": "Warhapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1130,
		"city": "Zaidpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1131,
		"city": "Zamania",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 30
	},
	{
		"cityId": 1132,
		"city": "Adra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1133,
		"city": "Alipurduar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1134,
		"city": "Arambagh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1135,
		"city": "Asansol",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1136,
		"city": "Baharampur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1137,
		"city": "Balurghat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1138,
		"city": "Bankura",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1139,
		"city": "Darjiling",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1140,
		"city": "EnglishBazar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1141,
		"city": "Gangarampur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1142,
		"city": "Habra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1143,
		"city": "HugliChinsurah",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1144,
		"city": "Jalpaiguri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1145,
		"city": "Jhargram",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1146,
		"city": "Kalimpong",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1147,
		"city": "Kharagpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1148,
		"city": "Kolkata",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1149,
		"city": "Mainaguri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1150,
		"city": "Malda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1151,
		"city": "Mathabhanga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1152,
		"city": "Medinipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1153,
		"city": "Memari",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1154,
		"city": "Monoharpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1155,
		"city": "Murshidabad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1156,
		"city": "Nabadwip",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1157,
		"city": "Naihati",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1158,
		"city": "Panchla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1159,
		"city": "Pandua",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1160,
		"city": "PaschimPunropara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1161,
		"city": "Purulia",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1162,
		"city": "Raghunathpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1163,
		"city": "Raghunathganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1164,
		"city": "Raiganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1165,
		"city": "Rampurhat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1166,
		"city": "Ranaghat",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1167,
		"city": "Sainthia",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1168,
		"city": "Santipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1169,
		"city": "Siliguri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1170,
		"city": "Sonamukhi",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1171,
		"city": "Srirampore",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1172,
		"city": "Suri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1173,
		"city": "Taki",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1174,
		"city": "Tamluk",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1175,
		"city": "Tarakeswar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 31
	},
	{
		"cityId": 1176,
		"city": "Adityapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1177,
		"city": "BokaroSteelCity",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1178,
		"city": "Chaibasa",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1179,
		"city": "Chatra",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1180,
		"city": "Chirkunda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1181,
		"city": "Medininagar(Daltonganj)",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1182,
		"city": "Deoghar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1183,
		"city": "Dhanbad",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1184,
		"city": "Dumka",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1185,
		"city": "Giridih",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1186,
		"city": "Gumia",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1187,
		"city": "Hazaribag",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1188,
		"city": "Jamshedpur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1189,
		"city": "JhumriTilaiya",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1190,
		"city": "Lohardaga",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1191,
		"city": "Madhupur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1192,
		"city": "Mihijam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1193,
		"city": "Musabani",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1194,
		"city": "Pakaur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1195,
		"city": "Patratu",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1196,
		"city": "Phusro",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1197,
		"city": "Ramgarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1198,
		"city": "Ranchi*",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1199,
		"city": "Sahibganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1200,
		"city": "Saunda",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1201,
		"city": "Simdega",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1202,
		"city": "Tenu dam-cum-Kathhara",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 32
	},
	{
		"cityId": 1203,
		"city": "Bageshwar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1204,
		"city": "Dehradun",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1205,
		"city": "HaldwanicumKathgodam",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1206,
		"city": "Hardwar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1207,
		"city": "Kashipur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1208,
		"city": "Manglaur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1209,
		"city": "Mussoorie",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1210,
		"city": "Nagla",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1211,
		"city": "Nainital",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1212,
		"city": "Pauri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1213,
		"city": "Pithoragarh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1214,
		"city": "Ramnagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1215,
		"city": "Rishikesh",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1216,
		"city": "Roorkee",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1217,
		"city": "Rudrapur",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1218,
		"city": "Sitarganj",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1219,
		"city": "Srinagar",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	},
	{
		"cityId": 1220,
		"city": "Tehri",
		"createdAt": new Date(),
		"updatedAt": new Date(),
		"stateId": 33
	}
]
, {});
   
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('h_city', null, {});
    
  }
};