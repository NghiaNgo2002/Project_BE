// src/routes/product.js
const express = require("express");
const router = express.Router();
const productControllers = require("../controller/product");


/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API endpoints for managing products
 */

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Get all products
 *     description: Retrieve all products available.
 *     responses:
 *       '200':
 *         description: List of products successfully retrieved.
 *       '500':
 *         description: Error retrieving the list of products.
 *     tags: [Products]
 */

/**
 * @swagger
 * /api/product/productdetail/{product_name}:
 *   get:
 *     summary: Search product by name
 *     description: Retrieve product details by its name.
 *     parameters:
 *       - in: path
 *         name: product_name
 *         required: true
 *         description: Name of the product to search
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Details of the product retrieved successfully.
 *       '404':
 *         description: Product not found.
 *       '500':
 *         description: Error retrieving product details.
 *     tags: [Products]
 */


router.get("/product", productControllers.getAll);
router.get("/productdetail/:product_name", productControllers.searchName);
module.exports = router;
