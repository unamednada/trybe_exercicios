const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  const validLogin = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^[0-9]/
  };

  if (!email || !password) {
    return res.status(400).json({ message: 'invalid data' });
  }

  if (!validLogin.email.test(email) || !validLogin.password.test(password)) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

module.exports = validateLogin;
