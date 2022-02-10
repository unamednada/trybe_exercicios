require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
  const { username: newUser, password } = req.body;
  const usernameList = await User.findAll();

  if (usernameList.map(({ username }) => username).includes(newUser)) {
    return next({ statusCode: 409, message: 'user already exists' });
  }

  const admin = Math.floor(Math.random() * 100) > 50;

  await User.create({ username: newUser, password, admin });

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { username: newUser, admin } }, SECRET, jwtConfig);

  res.status(200).json({ token });
};
