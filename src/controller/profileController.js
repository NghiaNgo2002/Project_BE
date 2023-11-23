// controllers/profileController.js

const db = require('../db');

exports.getProfileByID = (req, res) => {
    const id = req.params.id; // Get the username from request parameters
  
    db.query('SELECT firstname,lastname,phone,address,email FROM accounts WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error('Error retrieving profile information:', err);
        return res.status(500).json({ message: 'Error retrieving profile information.' });
      }
      if (result.length > 0) {
        const profile = result[0];
        return res.status(200).json(profile);
      } else {
        return res.status(404).json({ message: 'User not found.' });
      }
    });
  };