'use strict';
var checkoutController = require('../../controllers/checkout.controller.js');
var express = require('express');
var router = express.Router();

/* Checkout Route */
router.post('/', checkoutController.checkout);

module.exports = router;