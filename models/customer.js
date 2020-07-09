'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};