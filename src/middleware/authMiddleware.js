require("dotenv").config(); // Load environment variables from .env file
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if there's no token
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: Token is missing" });
  }

  const token = authHeader.split(" ")[1]; // Authorization: 'Bearer TOKEN'

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Error during token verification:", err);

      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Unauthorized: Token expired" });
      } else {
        return res.status(403).json({ message: "Forbidden: Invalid token" });
      }
    }

    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
