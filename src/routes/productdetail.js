// src/routes/product.js
const express = require("express");
const router = express.Router();
const productDetailControllers = require("../controller/productdetail");

router.get("/productdetail/:id", productDetailControllers.getOne);

module.exports = router;
