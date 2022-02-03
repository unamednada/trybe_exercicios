require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ statusCode: 401, message: 'Token not found' });
  }
  try {
    jwt.verify(authorization, SECRET);
  } catch (err) {
    return next({ statusCode: 401, message: err.message });
  }
  next();
};
