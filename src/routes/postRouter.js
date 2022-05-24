const express = require('express');
const blogPostController = require('../database/controllers/blogPostController');
const authToken = require('../middlewares/authTokenMiddleware');

const postRouter = express.Router();

postRouter.get('/', authToken, blogPostController.getBlogPosts);

postRouter.get('/:id', authToken, blogPostController.getBlogPostById);

postRouter.post('/', authToken, blogPostController.createBlogPost);

postRouter.put('/:id', authToken, blogPostController.editBlogPost);

postRouter.delete('/:id', authToken, blogPostController.deleteBlogPost);

module.exports = postRouter;
