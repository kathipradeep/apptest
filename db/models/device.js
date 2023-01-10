'use strict';
module.exports = (sequelize, DataTypes) => {
  const device = sequelize.define('h_device', {
    deviceId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      constraints: false,
      type: DataTypes.INTEGER
    },
    deviceName: DataTypes.STRING,
    macAddress: DataTypes.STRING,
    isConnected:DataTypes.BOOLEAN,
    displayOrder: DataTypes.INTEGER,
    updatedByTCPServer: DataTypes.BOOLEAN,
  },
  {
    
    tableName: 'h_device',
    createdAt:'createdAt',
    updatedAt:'updatedAt',
    deletedAt: 'deletedAt',
    //paranoid: true,
    timestamps: true
}, {});
  device.associate = function (models) {
    device.hasMany(models.h_relays,{foreignKey:{ name:'deviceId',allowNull: false}});
    device.belongsTo(models.h_user,{foreignKey: {name:'userId',allowNull: false}});
    //device.belongsTo(models.h_symbol,{foreignKey: {name:'symbolId'}});
    device.belongsTo(models.h_location,{foreignKey:{ name:'locationId'}});
    //device.belongsTo(models.h_deviceFeatures,{foreignKey:{name: 'deviceFeatureId'}});
    // associations can be defined here
  };
 
  return device;
};
