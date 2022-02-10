const Joi = require('joi');

module.exports = (req, _res, next) => {
  const { username, password } = req.body;

  const { error } = Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().min(5),
  })
    .validate({ username, password });
  
  if (error) return next(error);
  next();
};
