var categoryService = require('../services/category.service');

/* Get all Categories */
var getCategories = function (req, res) {
    categoryService.fetchCategories(req).then(categories => {
        res.status(200).json({
            categories: categories,
            status: 'success',
            message: ""
        });
    });
};

/* Create a new brand */
var createCategory = function (req, res) {
    categoryService.createCategory(req).then(category => {
        res.status(200).json({
            category: category,
            status: 'success',
            message: ""
        });
    });
};

/* Get Brand */
var getCategory = function (req, res) {
    categoryService.getCategory(req).then((category) => {
        res.status(200).json({
            category: category,
            status: 'success',
            message: ""
        });
    });
};

/* Update Brand */
var editCategory = function (req, res) {
    categoryService.editCategory(req).then(() => {
        res.status(200).json({
            status: 'success',
            message: ""
        });
    });
};

/* Delete Brand */
var deleteCategory = function (req, res) {
    categoryService.deleteCategory(req).then(() => {
        res.status(200).json({
            status: 'success',
            message: ""
        });
    });
};

/* Exports all methods */
module.exports = {
    getCategories: getCategories,
    getCategory: getCategory,
    createCategory: createCategory,
    editCategory: editCategory,
    deleteCategory: deleteCategory
};