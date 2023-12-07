// routes/cart.js

const express = require("express");
const router = express.Router();
const cartControllers = require("../controller/cart");

router.get("/cart/:user_id", cartControllers.getAll);
router.post("/cart/:user_id", cartControllers.addOne);
router.delete("/cart/:id/:user_id", cartControllers.deleteOne);
router.put("/cart/update/:id/:user_id", cartControllers.updateOne);

module.exports = router;
