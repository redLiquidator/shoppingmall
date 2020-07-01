var brandService = require('../services/brand.service');

/* Get all brands */
var getBrands = function (req, res) {
    brandService.fetchBrands().then(brands => {
        res.status(200).json({
            brands: brands,
            status: 'success',
            message: ""
        });
    });
};

/* Create a new brand */
var createBrand = function (req, res) {
    brandService.createBrand(req).then(brand => {
        res.status(200).json({
            brand: brand,
            status: 'success',
            message: ""
        });
    });
};

/* Get Brand */
var getBrand = function (req, res) {
    brandService.getBrand(req).then((brand) => {
        res.status(200).json({
            brand: brand,
            status: 'success',
            message: ""
        });
    });
};

/* Update Brand */
var editBrand = function (req, res) {
    brandService.editBrand(req).then(() => {
        brandService.getBrand(req).then(brand => {
            res.status(200).json({
                brand: brand,
                status: 'success',
                message: ""
            });
        });
    });
};

/* Delete Brand */
var deleteBrand = function (req, res) {
    brandService.deleteBrand(req).then(() => {
        res.status(200).json({
            status: 'success',
            message: ""
        });
    });
};

/* Exports all methods */
module.exports = {
    getBrands: getBrands,
    getBrand: getBrand,
    createBrand: createBrand,
    editBrand: editBrand,
    deleteBrand: deleteBrand
};