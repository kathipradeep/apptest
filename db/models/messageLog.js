'use strict';
module.exports = (sequelize, DataTypes) => {
  const messageLog = sequelize.define('h_messageLog',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    command: DataTypes.STRING,
    messageId: DataTypes.STRING,
    message: DataTypes.STRING,

  },
    {
    
      tableName: 'h_messageLog',
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true
  }, {});
  messageLog.associate = function (models) {
    // associations can be defined here

  };
  
  return messageLog;
};