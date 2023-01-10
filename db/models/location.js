'use strict';
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('h_location',{
    locationId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    locationName: DataTypes.STRING
  },
    {
    
      tableName: 'h_location',
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      deletedAt: 'deletedAt',
      //paranoid: true,
      timestamps: true
  }, {});
    location.associate = function (models) {
      location.belongsTo(models.h_user, {foreignKey: {name:'userId',allowNull: false}});
    // associations can be defined here

  };
  
  return location;
};