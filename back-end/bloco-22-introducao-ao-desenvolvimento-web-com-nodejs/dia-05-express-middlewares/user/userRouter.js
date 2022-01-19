const express = require('express');
const router = express.Router();

const validateLogin = require('./validateLogin');
const validateUsername = require('./validateUsername');
router.use(validateLogin);
router.use(validateUsername);

router.post('/register', (req, res) => {
  res.status(201).json({ message: 'user created' });
});

module.exports = router;
