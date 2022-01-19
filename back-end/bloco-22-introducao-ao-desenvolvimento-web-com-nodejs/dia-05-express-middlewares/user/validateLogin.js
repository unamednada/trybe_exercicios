const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  const validLogin = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^[0-9]*$/,
  };

  if (!email || !password) {
    return res.status(400).json({ message: 'invalid data' });
  }

  if (!validLogin.email.test(email) || !validLogin.password.test(password) ||  ![3, 4, 5, 6, 7, 8].includes(password.length)) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

module.exports = validateLogin;
