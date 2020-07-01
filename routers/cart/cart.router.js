'use strict';
var cartController = require('../../controllers/cart.controller.js');
var express = require('express');
var router = express.Router();

/* Get the Cart */
router.get('/', cartController.getCart);

/* Add to the Cart */
router.post('/:productId', cartController.addToCart);

/* remove from the Cart */
router.delete('/:cartItemId', cartController.removeFromCart);

module.exports = router;
