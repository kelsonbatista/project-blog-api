const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const { getUserEmail } = require('../database/services/userService');

const validateUser = async (req, _res, next) => {
  const userSchema = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().required().lowercase().email(),
    password: Joi.string().required().min(6),
  });

  const { displayName, email, password } = req.body;
  const { error } = userSchema.validate({ displayName, email, password });
  const status = StatusCodes.BAD_REQUEST;
  if (error) next({ status, message: error.message });
  const userEmail = await getUserEmail(email);
  if (userEmail) next({ status: StatusCodes.CONFLICT, message: 'User already registered' });
  next();
};

module.exports = { validateUser };
