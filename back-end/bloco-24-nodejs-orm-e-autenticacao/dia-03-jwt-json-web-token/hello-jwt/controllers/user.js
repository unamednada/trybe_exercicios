require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const auth = jwt.decode(authorization, SECRET);
  const { data: { username, admin } } = auth;
  res.status(200).json({ username, admin });
};
