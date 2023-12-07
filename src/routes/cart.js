// routes/cart.js

const express = require("express");
const router = express.Router();
const cartControllers = require("../controller/cart");

router.get("/cart", cartControllers.getAll);
router.get("/cart/:id", cartControllers.getOne);
router.post("/cart", cartControllers.addOne);
router.put("/cart/:id/update", cartControllers.updateOne);
router.delete("/cart/:id", cartControllers.deleteOne);

module.exports = router;
