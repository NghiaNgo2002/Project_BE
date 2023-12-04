const express = require('express');
const router = express.Router();
const orderDetailController = require('../controller/orderDetailController');


router.get('/', orderDetailController.getAllOrderDetail);
router.get('/:orderID',orderDetailController.getOrderDetailByID);



module.exports = router;