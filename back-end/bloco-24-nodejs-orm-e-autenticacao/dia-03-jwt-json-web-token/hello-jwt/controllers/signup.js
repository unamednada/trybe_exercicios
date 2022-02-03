require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, res) => {
  const { username, password } = req.body;
  
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const token = jwt.sign({ data: { username, admin } }, SECRET, jwtConfig);

  res.status(200).json({ token });
};
