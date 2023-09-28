'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkingTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkingTime.init({
    clockInTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    clockOutTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    isWorking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'WorkingTime',
  });

  WorkingTime.associate = function(models) {
    WorkingTime.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return WorkingTime;
};