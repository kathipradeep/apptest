'use strict';
module.exports = (sequelize, DataTypes) => {
  const relays = sequelize.define('h_relays', {
    relayId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    switchNo: DataTypes.INTEGER,
    switchName: DataTypes.STRING,
    switchStatus: DataTypes.INTEGER,
    isDimmer: DataTypes.BOOLEAN
  },
  {
    
    tableName: 'h_relays',
    createdAt:'createdAt',
    updatedAt:'updatedAt',
    deletedAt: 'deletedAt',
    //paranoid: true,
    timestamps: true
}, {});
  relays.associate = function (models) {
    relays.belongsTo(models.h_device,{foreignKey: {name:'deviceId',allowNull: false}});
    //relays.belongsTo(models.h_symbol,{foreignKey: {name:'symbolId'}});
    relays.hasMany(models.h_schedule,{foreignKey:{ name:'relayId',allowNull: false}});
    relays.hasMany(models.h_timer,{foreignKey:{ name:'relayId',allowNull: false}});
    // associations can be defined here
  };
  
  return relays;
};

