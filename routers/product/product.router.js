'use strict';
var productController = require('../../controllers/product.controller');
var express = require('express');
var router = express.Router();

/* Fetch Products */
router.get('/:category_slug/:brand_slug/:page/:productsPerPage', productController.getPagedProducts);

/* Create New Product */
router.post('/', productController.createProduct);

/* Get Product */
router.get('/:id', productController.getProduct);

/* Edit Product */
router.put('/', productController.editProduct);

/* Delete Product */
router.delete('/:id', productController.deleteProduct);

module.exports = router;