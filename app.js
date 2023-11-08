const express = require('express');
const LogInRoutes = require('./src/routes/LogIn');
const app = express();
const RegisterRoutes = require('./src/routes/Register');


// Use built-in middleware for json
app.use(express.json());


 


// Configure routes without passing the db object
app.use('/api',LogInRoutes);
app.use('/api',RegisterRoutes);


// Error handling middleware (example)
app.use((err,req,res,next) =>{
    console.error(err.stack);
    res.status(500).send ('Some thing broke!');
});

// Add the app.listen method to start the server
const port = process.env.PORT || 3001; // Specify the port you want to listen on
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
