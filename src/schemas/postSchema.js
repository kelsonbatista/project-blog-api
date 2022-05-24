const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required().min(6),
  content: Joi.string().required().min(6),
  categoryIds: Joi.array().required(),
});

module.exports = postSchema;
