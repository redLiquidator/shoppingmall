"use strict";
var db = require('../models/index.js');
var category = require('../models/product/category.js');
var categoryModel = category(db.sequelize, db.Sequelize.DataTypes);

/* Fetch Categories */
var fetchCategories = function () {
    let categories = categoryModel.findAll({ where: { isDeleted: false } });
    return categories;
};

/* Create Category */
var createCategory = function (req) {
    let category = categoryModel.create({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
        metaDescription: req.body.metaDescription,
        metaKeywords: req.body.metaKeywords
    });
    return category;
};

/* Edit Category */
var editCategory = function (req) {
    let result = categoryModel.update({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
        metaDescription: req.body.metaDescription,
        metaKeywords: req.body.metaKeywords
    },
        {
            where: { id: req.body.id }
        });
    return result;
};

/* Get Category */
var getCategory = function (req) {
    let category = categoryModel.findByPk(req.params.id);
    return category;
};

/* Delete Category */
var deleteCategory = function (req) {
    let result = categoryModel.update({ isDeleted: true },
        {
            where: { id: req.params.id }
        });
    return result;
};

/* Exports all methods */
module.exports = {
    createCategory: createCategory,
    editCategory: editCategory,
    fetchCategories: fetchCategories,
    getCategory: getCategory,
    deleteCategory: deleteCategory
};