const jwt = require('jsonwebtoken');
require("dotenv").config();

const secret = process.env.JWT_SECRET;

console.log(secret);

// Middleware to check if the request has a valid JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Assuming token is passed as "Bearer token"

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user; // Attach the user data to the request object
    next();
  });
};

module.exports = authenticateToken;
