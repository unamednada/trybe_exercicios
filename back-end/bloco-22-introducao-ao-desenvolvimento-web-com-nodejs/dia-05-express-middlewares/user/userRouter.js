const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

const validateLogin = require('./validateLogin');
const validateUsername = require('./validateUsername');
router.use(validateLogin);

const generateToken = require('./generateToken');
const token = generateToken();

const loginError = (err, req, res, next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ message: err.message, code: err.code });
  }

  return res.status(400).json({ message: 'email or password is incorrect' });
}

router.post('/login',[
  rescue((req, res) => {
    res.status(200).json({ token });
  }),
  (err, req, res, next) => {
    return next(err);
  },
  loginError
]);

router.use(validateUsername);

router.post('/register', (req, res) => {
  res.status(201).json({ message: 'user created' });
});

module.exports = router;
