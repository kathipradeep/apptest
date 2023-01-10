'use strict';
module.exports = (sequelize, DataTypes) => {
  const deviceMaster = sequelize.define('h_deviceMaster', {
    deviceMasterId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    deviceMACAddress: DataTypes.STRING
  },

   {
    
      tableName: 'h_deviceMaster',
      createdAt:'createdAt',
      updatedAt:'updatedAt',
      timestamps: true
  }, {});
  deviceMaster.associate = function (models) {
    deviceMaster.belongsTo(models.h_deviceFeatures,{foreignKey:{name:'deviceFeatureId',allowNull: false}} );
    // associations can be defined here
  };
  
  return deviceMaster;
};