'use strict';
module.exports = (sequelize, DataTypes) => {
  const burger_model = sequelize.define('burger_model', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {});
  burger_model.associate = function (models) {
    // associations can be defined here
  };
  return burger_model;
};