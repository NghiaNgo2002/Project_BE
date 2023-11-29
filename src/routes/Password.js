const express = require('express');
const router = express.Router();
const PasswordController = require('../controller/PasswordController');

router.post('/password',PasswordController.changePassword);
module.exports = router;
