const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const validateLogin = async (req, _res, next) => {
  const loginSchema = Joi.object({
    email: Joi.string().required().lowercase().email(),
    password: Joi.string().required().min(6),
  });

  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });
  const status = StatusCodes.BAD_REQUEST;
  if (error) next({ status, message: 'Some required fields are missing' });  
  next();
};

module.exports = { validateLogin };
