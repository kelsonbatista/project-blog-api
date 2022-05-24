const { StatusCodes } = require('http-status-codes');
const blogPostService = require('../services/blogPostService');

const getBlogPosts = async (_req, res, next) => {
  try {
    const blogPost = await blogPostService.getBlogPosts();
    return res.status(StatusCodes.OK).json(blogPost);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const getBlogPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blogPost = await blogPostService.getBlogPostById(id);
    return res.status(StatusCodes.OK).json(blogPost);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const createBlogPost = async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    const blogPost = await blogPostService.createBlogPost(userId, req.body);
    return res.status(StatusCodes.CREATED).json(blogPost);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const editBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blogPost = req.body;
    const user = await blogPostService.editBlogPost(id, blogPost);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const deleteBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blogPost = await blogPostService.deleteBlogPost(id);
    return res.status(StatusCodes.OK).json(blogPost);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

module.exports = {
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
  editBlogPost,
  deleteBlogPost,
};
