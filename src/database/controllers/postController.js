const { StatusCodes } = require('http-status-codes');
const postService = require('../services/postService');

const getPosts = async (_req, res, next) => {
  try {
    const category = await postService.getPosts();
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await postService.getPostById(id);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await postService.createPost(name);
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const editPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const postInfo = req.body;
    const user = await postService.editPost(id, postInfo);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await postService.deletePost(id);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
};
