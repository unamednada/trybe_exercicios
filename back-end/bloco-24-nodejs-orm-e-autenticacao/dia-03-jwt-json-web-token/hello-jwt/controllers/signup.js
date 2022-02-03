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

  await User.create({ username: newUser, password });

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const admin = false;

  const token = jwt.sign({ data: { username: newUser, admin } }, SECRET, jwtConfig);

  res.status(200).json({ token });
};
