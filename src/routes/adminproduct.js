const express = require("express");
const router = express.Router();
const adminProductController = require("../controller/adminproduct");

router.get("/admin-product", adminProductController.getAll);
router.get("/admin-product/:id", adminProductController.getOne);
router.post("/admin-product", adminProductController.addProduct);
router.put("/admin-product/:id/update", adminProductController.updateProduct);
router.delete("/admin-product/:id", adminProductController.deleteProduct);
router.patch("/admin-product/:id/color", adminProductController.addColor);

module.exports = router;
