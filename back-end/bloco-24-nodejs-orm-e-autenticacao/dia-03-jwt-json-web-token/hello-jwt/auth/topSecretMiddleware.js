require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ statusCode: 401, message: 'Token not found' });
  }
  try {
    const { data: { admin } } = jwt.verify(authorization, SECRET);
    if (!admin) return next({ statusCode: 403, message: 'Restricted access' });
  } catch (err) {
    return next({ statusCode: 401, message: err.message });
  }
  next();
};
