const { StatusCodes } = require('http-status-codes');
const postSchema = require('../schemas/postSchema');

const validatePost = async (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = postSchema.validate({ title, content, categoryIds });
  const status = StatusCodes.BAD_REQUEST;
  if (error) return next({ status, message: 'Some required fields are missing' });  
  next();
};

module.exports = { validatePost };
