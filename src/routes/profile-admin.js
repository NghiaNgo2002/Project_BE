const express = require('express');
const router = express.Router();
const ListAllprofileController =  require('../controller/profileController');
const ViewProfileByIDController =  require('../controller/profileController');
const profileController = require('../controller/profileController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', ListAllprofileController.ListAllProfile);
router.get('/:id',ViewProfileByIDController.ViewProfileByID)
router.post('/', verifyToken, profileController.AddNewUser);
router.put('/:id',verifyToken, profileController.updateProfileById)
router.delete('/:id',verifyToken, profileController.DeleteProfileByID)
module.exports = router;