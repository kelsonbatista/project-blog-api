const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().required().lowercase().email(),
  password: Joi.string().required().min(6),
});

module.exports = userSchema;
