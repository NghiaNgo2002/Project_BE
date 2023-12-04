const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', orderController.getAllOrders);
router.get('/:orderID',orderController.getOrderByID)
router.put('/:orderID',verifyToken, orderController.updateOrderByID)
router.delete('/:orderID',verifyToken, orderController.DeleteOrderByID)
module.exports = router;