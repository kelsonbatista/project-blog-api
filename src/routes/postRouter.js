const express = require('express');
const blogPostController = require('../database/controllers/blogPostController');
const authToken = require('../middlewares/authTokenMiddleware');
const { validatePost } = require('../middlewares/validatePostMiddleware');

const postRouter = express.Router();

postRouter.get('/search', authToken, blogPostController.searchPost);

postRouter.get('/', authToken, blogPostController.getBlogPosts);

postRouter.get('/:id', authToken, blogPostController.getBlogPostById);

postRouter.post('/', authToken, validatePost, blogPostController.createBlogPost);

postRouter.put('/:id', authToken, blogPostController.editBlogPost);

postRouter.delete('/:id', authToken, blogPostController.deleteBlogPost);

module.exports = postRouter;
