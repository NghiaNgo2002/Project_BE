const express = require('express');
const router = express.Router();

const RegisterController = require('./RegisterController');

router.get('/', RegisterController.Register);
router.post('/',RegisterController.RegisterAccount);
module.exports = router;
