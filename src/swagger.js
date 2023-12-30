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
  '/Register.js',
  '/adminproduct.js',
  '/cart.js',
  '/order.js',
  '/orderdetail.js',
  '/Password.js',
  '/product.js',
  '/productdetail.js',
  '/profile-admin.js',
  '/profile.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;