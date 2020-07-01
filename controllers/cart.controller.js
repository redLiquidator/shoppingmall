'use strict';
var cartService = require('../services/cart.service.js');

/* Get Cart*/
var getCart = function (req, res) {
    cartService.getCart(req).then((cart) => {
        res.status(200).json({
            cart: cart,
            status: 'success',
            message: ""
        });
    });
};

/* Add to Cart */
var addToCart = function (req, res) {
    cartService.addToCart(req).then(() => {
        cartService.getCartItems(req).then(cartItems => {
            res.status(200).json({
                cartItems: cartItems,
                status: 'addToCartsuccess',
                message: ""
            });
        });
    }).catch(error => {
        res.status(500).json({
            error: error,
            status: 'addToCartfailure',
            message: "Could not add the item to the cart"
        });
    });
};

/* Remove From Cart */
var removeFromCart = function (req, res) {
    cartService.removeFromCart(req).then(() => {
        cartService.getCartItems(req).then(cartItems => {
            res.status(200).json({
                cartItems: cartItems,
                status: 'success',
                message: ""
            });
        });
    });
};

/* Exports all methods */
module.exports = {
    getCart: getCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart
};