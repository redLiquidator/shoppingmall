"use strict";
var db = require('../models/index.js');
var brand = require('../models/product/brand.js');
var brandModel = brand(db.sequelize, db.Sequelize.DataTypes);

/* Fetch Brands */
var fetchBrands = function () {
    let brands = brandModel.findAll({ where: { isDeleted: false } });
    return brands;
};

/* Create Brands */
var createBrand = function (req) {
    let brand = brandModel.create({ 
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
        metaDescription: req.body.metaDescription,
        metaKeywords: req.body.metaKeywords
    });
    return brand;
};

/* Edit Brands */
var editBrand = function (req) {
    let result = brandModel.update({
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

/* Get Brand */
var getBrand = function (req) {
    let brand = brandModel.findByPk(req.params.id);
    return brand;
};

/* Delete Brand */
var deleteBrand = function (req) {
    let result = brandModel.update({ isDeleted: true },
        {
            where: { id: req.params.id }
        });
    return result;
};

/* Exports all methods */
module.exports = {
    fetchBrands: fetchBrands,
    getBrand: getBrand,
    createBrand: createBrand,
    editBrand: editBrand,
    deleteBrand: deleteBrand
};