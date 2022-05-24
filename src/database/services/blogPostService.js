const { StatusCodes } = require('http-status-codes');
const { BlogPost, Category } = require('../models');

const getBlogPosts = async () => {
  const blogPost = await BlogPost.findAll();
  return blogPost;
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPost.findByPk(id);
  return blogPost;
};

const checkCategory = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (count < categoryIds.length) {
    throw new Error({ status: StatusCodes.BAD_REQUEST, message: '"categoryIds" not found' });
  }
};

const createBlogPost = async (userId, reqBody) => {
  const { title, content, categoryIds } = reqBody;
  await checkCategory(categoryIds);
  const blogPost = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });
  blogPost.addCategories(categoryIds);
  return blogPost;
};

const editBlogPost = async (id, postInfo) => {
  const blogPost = await BlogPost.update({ id, ...postInfo }, { where: { id } });
  return blogPost;
};

const deleteBlogPost = async (id) => {
  const blogPost = await BlogPost.destroy({ where: { id } });
  return blogPost;
};

module.exports = {
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
  editBlogPost,
  deleteBlogPost,
};
