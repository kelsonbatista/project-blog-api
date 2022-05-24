const { StatusCodes } = require('http-status-codes');
const { getUserEmail } = require('../database/services/userService');
const userSchema = require('../schemas/userSchema');

const validateUser = async (req, _res, next) => {
  const { displayName, email, password } = req.body;
  const { error } = userSchema.validate({ displayName, email, password });
  const status = StatusCodes.BAD_REQUEST;
  if (error) next({ status, message: error.message });
  const userEmail = await getUserEmail(email);
  if (userEmail) next({ status: StatusCodes.CONFLICT, message: 'User already registered' });
  next();
};

module.exports = { validateUser };
