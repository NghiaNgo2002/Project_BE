// src/routes/product.js
const express = require("express");
const router = express.Router();
const productControllers = require("../controller/product");

router.get("/product", productControllers.getAll);
router.get("/product/:id", productControllers.getOne);
module.exports = router;
