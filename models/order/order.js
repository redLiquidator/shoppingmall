'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        orderTotal: DataTypes.DECIMAL,
        orderItemTotal: DataTypes.DECIMAL,
        shippingCharge: DataTypes.DECIMAL,
        orderStatus: { type: DataTypes.ENUM, values: ['Canceled', 'Submitted', 'Completed', 'Processing'] },
        deliveryAddressId: DataTypes.INTEGER,
        customerId: DataTypes.INTEGER,
        isDeleted: DataTypes.BOOLEAN
    }, {});
    Order.associate = function (models) {
        Order.hasMany(models.OrderItem);
        Order.belongsTo(models.Address);
        Order.belongsTo(models.Customer);
    };
    return Order;
};