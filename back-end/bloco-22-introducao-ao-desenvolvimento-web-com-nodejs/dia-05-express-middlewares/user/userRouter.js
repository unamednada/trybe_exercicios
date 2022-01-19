const express = require('express');
const router = express.Router();

const validateLogin = require('./validateLogin');
const validateUsername = require('./validateUsername');
router.use(validateLogin);

const generateToken = require('./generateToken');
const token = generateToken();

router.post('/login', (req, res) => {
  res.status(200).json({ token });
});

router.use(validateUsername);

router.post('/register', (req, res) => {
  res.status(201).json({ message: 'user created' });
});

module.exports = router;
