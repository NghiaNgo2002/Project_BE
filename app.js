const express = require('express');
const LogInRoutes = require('./src/routes/LogIn');
const app = express();
const RegisterRoutes = require('./src/routes/Register');
const cors = require('cors');

// Use built-in middleware for json
app.use(express.json());


 // CORS configuration
// Replace 'https://your-frontend.vercel.app' with your actual frontend application URL
const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200
};

// Enable CORS with the above options
app.use(cors(corsOptions));

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
