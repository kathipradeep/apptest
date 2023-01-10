'use strict';
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('h_city',{
    
    cityId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    city:DataTypes.STRING,
   
  },
    {
    
      tableName: 'h_city',
  }, {});
  city.associate = function (models) {
    city.belongsTo(models.h_state,{foreignKey: {name:'stateId',allowNull: false}});
    // associations can be defined here
  };
  
  return city;
};