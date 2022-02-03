const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { Authorization } = req.headers;
  
  if (!Authorization) {
    return next({ statusCode: 401, message: 'Token not found' });
  }

  res.status(200).send('Welcome!');
};
