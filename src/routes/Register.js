const express = require('express');
const router = express.Router();
const RegisterController = require('../controller/RegisterController');


router.post('/Register',RegisterController.RegisterAccount);
module.exports = router;
