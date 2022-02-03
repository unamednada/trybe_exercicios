require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req.headers);
  if (!authorization) {
    return next({ statusCode: 401, message: 'Token not found' });
  }
  try {
    const auth = jwt.verify(authorization, SECRET);
    const { data: { username, admin } } = auth;
    res.status(200).json({ username, admin });
  } catch (err) {
    return next({ statusCode: 401, message: err.message });
  }
};
