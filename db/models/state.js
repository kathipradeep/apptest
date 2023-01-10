'use strict';
module.exports = (sequelize, DataTypes) => {
  const state = sequelize.define('h_state',{
    
    stateId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    state:DataTypes.STRING,
   
  },
    {
      tableName: 'h_state',
  }, {});
  state.associate = function (models) {
    state.hasMany(models.h_city,{foreignKey:{ name:'stateId',allowNull: false}});
    // associations can be defined here
  };
  return state;
};