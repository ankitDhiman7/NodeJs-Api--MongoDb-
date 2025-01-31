const express = require('express');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const router = express.Router();

const secret = process.env.JWT_SECRET;

router.post('/', (req, res) => {
  const { username, password } = req.body;

  
  if (username === 'user' && password === 'password') { 
    const user = { username }; 
    const token = jwt.sign(user, secret, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
