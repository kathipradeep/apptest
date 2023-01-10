'use strict';
module.exports = (sequelize, DataTypes) => {
  const timer = sequelize.define('h_timer',{
    
    timerId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    timerStartDate: DataTypes.DATE,
    timerStartTime: DataTypes.TIME,
    updatedStatus: DataTypes.BOOLEAN
  },
    {
    
      tableName: 'h_timer',
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true
  }, {});
  timer.associate = function (models) {
    timer.belongsTo(models.h_relays,{foreignKey: {name:'relayId',allowNull: false}});
    // associations can be defined here
  };
  
  return timer;
};