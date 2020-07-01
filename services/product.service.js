'use strict';
var db = require('../models/index.js');
var brand = require('../models/product/brand.js');
var category = require('../models/product/category.js');
var product = require('../models/product/product.js');
var productBrand = require('../models/product/productbrand.js');
var productCategory = require('../models/product/productcategory.js');
//necesary step: create the models
var brandModel = brand(db.sequelize, db.Sequelize.DataTypes);
var categoryModel = category(db.sequelize, db.Sequelize.DataTypes);
var productModel = product(db.sequelize, db.Sequelize.DataTypes);
var productBrandModel = productBrand(db.sequelize, db.Sequelize.DataTypes);
var productCategoryModel = productCategory(db.sequelize, db.Sequelize.DataTypes);
//necesary step: define the associations between models
brandModel.associate({ Product: productModel, ProductBrand: productBrandModel });
categoryModel.associate({ Product: productModel, ProductCategory: productCategoryModel });
productModel.associate({
    Brand: brandModel,  
    Category: categoryModel,
    ProductBrand: productBrandModel,
    ProductCategory: productCategoryModel
});

/* Fetch Products */
var fetchProducts = function (req) {
    var selectedCategory = req.params.category_slug;
    var selectedBrand = req.params.brand_slug;
    var page = req.params.page;
    var productsPerPage = req.params.productsPerPage;

    let pageObject = null;

    if (selectedCategory === 'all-categories' && selectedBrand === 'all-brands') {
        pageObject = productModel.findAndCountAll({
            limit: productsPerPage,
            offset: ((page - 1) * productsPerPage),
            where: { isDeleted: false }
        });
    }

    if (selectedCategory !== 'all-categories' && selectedBrand !== 'all-brands') {
        pageObject = productModel.findAndCountAll({
            limit: productsPerPage,
            offset: ((page - 1) * productsPerPage),
            where: { isDeleted: false },
            include: [
                { model: brandModel, where: { slug: selectedBrand } },
                { model: categoryModel, where: { slug: selectedCategory } }
            ]
        });
    }

    if (selectedCategory !== 'all-categories' && selectedBrand === 'all-brands') {
        console.log('selectedCategory is '+ selectedCategory);
        pageObject = productModel.findAndCountAll({
            limit: productsPerPage,
            offset: ((page - 1) * productsPerPage),
            where: { isDeleted: false },
            include: [
                { model: categoryModel, where: { slug: selectedCategory } }
            ]
        });
    }

    if (selectedCategory === 'all-categories' && selectedBrand !== 'all-brands') {
        pageObject = productModel.findAndCountAll({
            limit: productsPerPage,
            offset: ((page - 1) * productsPerPage),
            where: { isDeleted: false },
            include: [
                { model: brandModel, where: { slug: selectedBrand } }
            ]
        });
    }

    return pageObject;
};

/* create product */
var createProduct = function (req) {
    let product = productModel.create({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
        metaDescription: req.body.metaDescription,
        metaKeywords: req.body.metaKeywords,
        sku: req.body.sku,
        model: req.body.model,
        price: req.body.price,
        oldPrice: req.body.oldPrice,
        imageUrl: req.body.imageUrl,
        isBestseller: req.body.isBestseller,
        isFeatured: req.body.isFeatured,
        quantity: req.body.quantity
    });

    return product;
}

/* edit product */
var editProduct = function (req) {
    let result = productModel.update({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
        metaDescription: req.body.metaDescription,
        metaKeywords: req.body.metaKeywords,
        sku: req.body.sku,
        model: req.body.model,
        price: req.body.price,
        oldPrice: req.body.oldPrice,
        imageUrl: req.body.imageUrl,
        isBestseller: req.body.isBestseller,
        isFeatured: req.body.isFeatured,
        quantity: req.body.quantity
    }, {
        where: { id: req.body.id }
    });
    return result;
};

/*get product*/
var getProduct = function (req) {
    let product = productModel.findByPk(req.params.id);
    return product;
};

/*delete product*/
var deleteProduct = function (req) {
    let result = productModel.update({ isDeleted: true },
        {
            where: { id: req.params.id }
        });
    return result;
};

/*exports all methods */
module.exports = {
    fetchProducts: fetchProducts,
    createProduct: createProduct,
    editProduct: editProduct,
    getProduct: getProduct,
    deleteProduct: deleteProduct
};