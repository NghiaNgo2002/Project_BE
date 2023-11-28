// routes/profile.js
const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');
const EditProfileController =  require('../controller/profileController');




// Get profile by username (you can add verifyToken if needed)
router.get('/:id', profileController.getProfileByID);
router.post('/:id', EditProfileController.editProfile);


module.exports = router;
