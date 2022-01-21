const validateTeam = (req, res, next) => {
  const { name, initials, country } = req.body;
  isNameValid = name && name.length >= 5;
  isInitialsValid = initials && initials.length >= 3;
  isCountryValid = country && country.length >= 3;

  if (!isNameValid || !isInitialsValid || !isCountryValid) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

module.exports = validateTeam;