'use strict';
var productService = require('../services/product.service');

/*Get all products*/
var getPagedProducts = function (req, res) {
    var page = req.params.page;
    var productsPerPage = req.params.productsPerPage;

    productService.fetchProducts(req).then(function (pageObject) {
        const itemCount = pageObject.count;
        const pageCount = Math.ceil(itemCount / parseInt(productsPerPage));
        res.status(200).json({
            products: pageObject.rows,
            pageCount: pageCount,
            productCount: itemCount,
            currentPage: parseInt(page),
            productsPerPage: parseInt(productsPerPage),
            status: 'success',
            message: ""
        });
    }).catch(error => {
        res.status(500).json({
            error: error,
            status: 'failure',
            message: "There was a problem in the server"
        });
    });
};

/* create a new product */
var createProduct = function (req, res) {
    console.log('createProduct function /controller');
    productService.createProduct(req).then(product => {
        res.status(200).json({
            product: product,
            status: "success",
            message: ""
        });
    });
};

/* Get Product */
var getProduct = function (req, res) {
    productService.getProduct(req).then(product => {
        res.status(200).json({
            product: product,
            status: "success",
            message: ""
        });
    });
};

/* Update Product */
var editProduct = function (req, res) {
    productService.editProduct(req).then(() => {
        res.status(200).json({
            product: product,
            status: "success",
            message: ""
        });
    });
};

/* Delete Product */
var deleteProduct = function (req, res) {
    productService.deleteProduct(req).then(() => {
        res.status(200).json({
            product: product,
            status: "success",
            message: ""
        });
    });
};


/*exports all methods */
module.exports = {
    getPagedProducts: getPagedProducts,
    createProduct: createProduct,
    editProduct: editProduct,
    getProduct: getProduct,
    deleteProduct: deleteProduct
};