const { PostCategory } = require('../models');

const getPosts = async () => {
  const posts = await PostCategory.findAll();
  return posts;
};

const getPostById = async (id) => {
  const post = await PostCategory.findByPk(id);
  return post;
};

const createPost = async (name) => {
  const post = await PostCategory.create({ name });
  return post;
};

const editPost = async (id, postInfo) => {
  const post = await PostCategory.update({ id, ...postInfo }, { where: { id } });
  return post;
};

const deletePost = async (id) => {
  const post = await PostCategory.destroy({ where: { id } });
  return post;
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
};
