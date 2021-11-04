const express = require('express')
const productController = express.Router();
const authenticateJWT = require('../config/authenticate')
const productRepository = require('../repository/ProductRepository')

//GET ALL PRODUCTS
productController.get("/", authenticateJWT, (req, res) => {
    productRepository.selectAllProducts(req, res);
})

module.exports = productController;