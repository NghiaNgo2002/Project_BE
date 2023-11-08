// controllers/signupController.js

const db = require('../db');

exports.RegisterAccount = (req, res) => {
    const { username, password} = req.body;

    // Validate input parameters here if needed

    // Check if username already exists
    db.query('SELECT * FROM accounts WHERE username = ?', [username], (err, rows) => {
      if (err) {
        // More detailed error handling could be implemented here
        console.error('Error checking username availability:', err);
        res.status(500).json({ message: 'Error registering the user.' });
        return;
      }

      // Check if username is already taken
      if (rows.length > 0) {
        const userExists = rows.some(u => u.username === username);
        if (userExists) {
          res.status(409).json({ message: 'Username already in use.' });
          return;
        }
      }


        // Save the new user with the password
        db.query('INSERT INTO accounts (username, password) VALUES (?, ?)', [username,password], (err, result) => {
          if (err) {
            // Handle specific errors like duplicate entry here
            console.error('Error registering the user:', err);
            res.status(500).json({ message: 'Error registering the user.' });
            return;
          }
          res.status(201).json({ message: 'User successfully registered.', userId: result.insertId });
        });
      });
    };

