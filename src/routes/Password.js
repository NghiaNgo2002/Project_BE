const express = require('express');
const router = express.Router();
const PasswordController = require('../controller/PasswordController');
// const ForgotPasswordController =  require('../controller/profileController');

/**
 * @swagger
 * tags:
 *   name: Password
 *   description: API endpoints for managing user passwords
 */

/**
 * @swagger
 * /api/password:
 *   post:
 *     summary: Change user password
 *     description: Change the password for a user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *               oldPassword:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Password changed successfully
 *       '400':
 *         description: Invalid request payload or missing required fields
 *       '401':
 *         description: Unauthorized access, authentication failed
 *       '500':
 *         description: Error changing the password
 *     tags: [Password]
 */

/**
 * @swagger
 * /api/password/getPasswordToken:
 *   post:
 *     summary: Request password reset token
 *     description: Request a token to reset the password for a user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             // Define properties to request a password reset token
 *     responses:
 *       '200':
 *         description: Password reset token sent successfully
 *       '400':
 *         description: Invalid request payload or missing required fields
 *       '404':
 *         description: User not found or email does not exist
 *       '500':
 *         description: Error sending password reset token
 *     tags: [Password]
 */

/**
 * @swagger
 * /api/password/reset-password:
 *   post:
 *     summary: Reset user password
 *     description: Reset the password for a user account using a reset token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             // Define properties to reset the user password
 *     responses:
 *       '200':
 *         description: Password reset successful
 *       '400':
 *         description: Invalid request payload or missing required fields
 *       '401':
 *         description: Unauthorized access, invalid or expired token
 *       '500':
 *         description: Error resetting the password
 *     tags: [Password]
 */

router.post('/password',PasswordController.changePassword);
router.post('/getPasswordToken', PasswordController.requestPasswordReset);
router.post('/reset-password', PasswordController.resetPassword);
module.exports = router;
