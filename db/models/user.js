'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('h_user', {
    userId: {
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
    password: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    isUserValidated:
    {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
    {
    
      tableName: 'h_user',
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true
  }, {});
  // user.associate = function (models) {
  //   user.hasMany(models.h_location,{foreignKey:{ name:'locationId',allowNull: false}});

  // };
 
  return user;
};