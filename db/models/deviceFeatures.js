'use strict';
module.exports = (sequelize, DataTypes) => {
  const deviceFeatures = sequelize.define('h_deviceFeatures', {
    deviceFeatureId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    modelName: DataTypes.STRING,
    nosOfRelayModules: DataTypes.INTEGER,
    hasDimmer: DataTypes.BOOLEAN
  },
  {
    
    tableName: 'h_deviceFeatures',
    createdAt:'createdAt',
    updatedAt:'updatedAt',
    timestamps: true
}, {});
  deviceFeatures.associate = function (models) {
    // associations can be defined here
  };
  
  return deviceFeatures;
};