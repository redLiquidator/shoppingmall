var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('../swagger/swagger-definition.json');

var brandRouter = require("./brand/brand.router");
var categoryRouter = require("./category/category.router");
var productRouter = require("./product/product.router");
var cartRouter = require("./cart/cart.router");
var checkoutRouter = require("./checkout/checkout.router");

var register = function (app) {
    app.use('/api/brand', brandRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
    app.use('/api/cart', cartRouter);
    app.use('/api/checkout', checkoutRouter);

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = register;