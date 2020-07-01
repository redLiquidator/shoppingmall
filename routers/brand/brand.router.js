var brandController = require('../../controllers/brand.controller');
var express = require('express');
var router = express.Router();

/* Fetch Brands */
router.get('/', brandController.getBrands);

/* Create New Brand */
router.post('/', brandController.createBrand);

/* Get Brand */
router.get('/:id', brandController.getBrand);

/* Edit Brand. */
router.put('/', brandController.editBrand);

/* Delete Brand. */
router.delete('/:id', brandController.deleteBrand);

module.exports = router;