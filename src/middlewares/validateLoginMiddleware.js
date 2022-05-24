const { StatusCodes } = require('http-status-codes');
const loginSchema = require('../schemas/loginSchema');

const validateLogin = async (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });
  const status = StatusCodes.BAD_REQUEST;
  if (error) return next({ status, message: 'Some required fields are missing' });  
  next();
};

module.exports = { validateLogin };
