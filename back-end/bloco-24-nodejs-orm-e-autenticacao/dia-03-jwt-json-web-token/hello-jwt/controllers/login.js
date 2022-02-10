require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({
    where: { username, password },
  });

  if (!user) return next({ statusCode: 403, message: 'user or password incorrect' });

  const { admin } = user;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { username, admin } }, SECRET, jwtConfig);

  res.status(200).json({ token });
};
