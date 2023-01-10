'use strict';
module.exports = (sequelize, DataTypes) => {
  const code = sequelize.define('h_code', {
    codeId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    emailId: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    mobileNumber: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    generatedCode: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expirationTime:
    {
      type: DataTypes.DATE,
      allowNull: false,
    }, 
    usedFor: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    
      tableName: 'h_code',
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true
  }, {});
  code.associate = function (models) {
    // associations can be defined here
  };
  return code;
};