const express = require('express');
const LogInRoutes = require('./routes/LogIn');
const app = express();
const RegisterRoutes = require('./routes/Register');
const cors = require('cors');
const swaggerSpec = require('./swagger'); // Import your Swagger specification
const swaggerUi = require('swagger-ui-express'); // Import swagger-ui-express
const profileRoutes = require('./routes/profile');
const { verifyToken } = require('./middleware/authMiddleware');
const passwordRoutes = require('./routes/Password');
const EditProfileRoutes = require('./routes/profile')
const ListAllprofileRoutes = require('./routes/profile-admin')
const productRoutes = require('./routes/product');
const productdetailRoutes = require('./routes/productdetail');

require('dotenv').config();

// Use built-in middleware for json
app.use(express.json());


// Serve Swagger documentation using Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

 // CORS configuration
// Replace 'https://your-frontend.vercel.app' with your actual frontend application URL
const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200
};

// Enable CORS with the above options
app.use(cors(corsOptions));


const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Configure routes without passing the db object
app.use('/api',LogInRoutes);
app.use('/api',RegisterRoutes);
app.use('/api/profile', verifyToken, profileRoutes); // Protect profile routes
app.use('/api',verifyToken,passwordRoutes);
app.use('/api/profile',verifyToken,EditProfileRoutes);
app.use('/api/profile-admin', verifyToken, ListAllprofileRoutes);
app.use('/api',verifyToken,productRoutes);
app.use('/api',verifyToken,productdetailRoutes);




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
