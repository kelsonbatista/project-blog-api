const { Op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { BlogPost, Category, User } = require('../models');

const searchPost = async (query) => {
  const blogPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: {
      [Op.or]: {
        title: { [Op.like]: `%${query}%` },
        content: { [Op.like]: `%${query}%` },
      },      
    },
  });
  return blogPost;
};

const getBlogPosts = async () => {
  const blogPost = await BlogPost.findAll(
    {
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: {
          attributes: [], // coloca as chaves que QUER mostrar
        },
        // attributes: { exclude: ['PostCategory'] },
      }],
    },
  );
  return blogPost;
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!blogPost) {
    const error = { status: StatusCodes.NOT_FOUND, message: 'Post does not exist' };
    throw error;
  }
  return blogPost;
};

const checkCategory = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (count < categoryIds.length) {
    const error = { status: StatusCodes.BAD_REQUEST, message: '"categoryIds" not found' };
    throw error;
  }
};

const createBlogPost = async (userId, reqBody) => {
  const { title, content, categoryIds } = reqBody;
  await checkCategory(categoryIds);
  const blogPost = await BlogPost.create({
    title,
    content,
    userId,
  });
  blogPost.addCategories(categoryIds);
  return blogPost;
};

const editBlogPost = async (id, postInfo, userInfo) => {
  const post = await getBlogPostById(id);
  const currentUser = userInfo.dataValues.id;
  const { title, content } = postInfo;
  if (!title || !content) {
    const error = { status: StatusCodes.BAD_REQUEST, message: 'Some required fields are missing' };
    throw error;
  }
  const postUser = post.user.id;
  if (currentUser !== postUser) {
    const error = { status: StatusCodes.UNAUTHORIZED, message: 'Unauthorized user' };
    throw error;
  }
  const updated = new Date();
  await BlogPost.update({ ...postInfo, updated }, { where: { id } });
  const newPost = await getBlogPostById(id);
  return newPost.dataValues;
};

const deleteBlogPost = async (id, userInfo) => {
  const post = await getBlogPostById(id);
  const currentUser = userInfo.dataValues.id;
  const postUser = post.user.id;
  if (currentUser !== postUser) {
    const error = { status: StatusCodes.UNAUTHORIZED, message: 'Unauthorized user' };
    throw error;
  }
  const blogPost = await BlogPost.destroy({ where: { id } });
  return blogPost;
};

module.exports = {
  searchPost,
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
  editBlogPost,
  deleteBlogPost,
};
