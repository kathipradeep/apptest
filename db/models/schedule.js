'use strict';
module.exports = (sequelize, DataTypes) => {
  const schedule = sequelize.define('h_schedule',{
    
    scheduleId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    startDate: DataTypes.DATE,
    startTime: DataTypes.TIME,
    startStatus: DataTypes.BOOLEAN,
    endDate: DataTypes.DATE,
    endTime: DataTypes.TIME,
    endStatus: DataTypes.BOOLEAN,
    frequency:DataTypes.STRING,
    interval:DataTypes.STRING,
    days:DataTypes.STRING

  },
    {
    
      tableName: 'h_schedule',
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true
  }, {});
  schedule.associate = function (models) {
    schedule.belongsTo(models.h_relays,{foreignKey: {name:'relayId',allowNull: false}});
    // associations can be defined here
  };
  
  return schedule;
};