const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization.length !== 12 || !(/^[a-zA-Z0-9]*$/.test(authorization))) {
    return res.status(401).json({ message: 'invalid token' });
  }

  next();
};

module.exports = authToken;
