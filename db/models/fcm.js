'use strict';
module.exports = (sequelize, DataTypes) => {
  const fcm = sequelize.define('h_fcm', {
    fcmId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      constraints: false,
      type: DataTypes.INTEGER
    },
    fcmKey: DataTypes.STRING,
  },
  {
    
    tableName: 'h_fcm',
    createdAt:'createdAt',
    updatedAt:'updatedAt',
    timestamps: true
}, {});
fcm.associate = function (models) {
    fcm.belongsTo(models.h_user,{foreignKey: {name:'userId',allowNull: false}});
  };
 
  return fcm;
};
