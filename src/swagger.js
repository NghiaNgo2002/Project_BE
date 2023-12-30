const swaggerJsdoc = require('swagger-jsdoc');


const options = {
  definition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'API of Fashion Store Website',
      version: '1.0.0',
      description: 'API for Fashion Store.',
    },
  },
  // List of files to be processed by swagger-jsdoc
  apis: ['/LogIn.js',
  './routes/Register.js',
  './routes/adminproduct.js',
  './routes/cart.js',
  './routes/order.js',
  './routes/orderdetail.js',
  './routes/Password.js',
  './routes/product.js',
  './routes/productdetail.js',
  './routes/profile-admin.js',
  './routes/profile.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;