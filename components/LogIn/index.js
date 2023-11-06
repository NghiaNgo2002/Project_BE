const express = require('express');
const router = express.Router();

const LogInController = require('./LogInController');

router.get('/', LogInController.LogIn);
router.post('/',LogInController.LogInAccount);
module.exports = router;
