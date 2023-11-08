const express = require('express');
const router = express.Router();
const LogInController = require('../controller/LogInController');


router.post('/login',LogInController.LogInAccount);
module.exports = router;
