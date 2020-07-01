var categoryController = require('../../controllers/category.controller');
var express = require('express');
var router = express.Router();

/* Fetch Categories */
router.get('/', categoryController.getCategories);

/* Create New Category */
router.post('/', categoryController.createCategory);

/* Get Category */
router.get('/:id', categoryController.getCategory);

/* Edit Category. */
router.put('/', categoryController.editCategory);

/* Delete Category. */
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;