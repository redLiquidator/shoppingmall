'use strict';
var checkoutService = require('../services/checkout.service.js');

/* Checkout */
var checkout = function (req, res) {
    checkoutService.processCheckout(req).then(() => {
        res.status(200).json({
            status: 'success',
            message: ""
        });
    }).catch(error => {
        res.status(500).json({
            error: error,
            status: 'failure',
            message: ""
        });
    });
};

/* Exports all method */
module.exports = {
    checkout: checkout
};