const express = require('express');
const postController = require('../database/controllers/postController');
const authToken = require('../middlewares/authTokenMiddleware');

const postRouter = express.Router();

postRouter.get('/', authToken, postController.getPosts);

postRouter.get('/:id', authToken, postController.getPostById);

postRouter.post('/', postController.createPost);

postRouter.put('/:id', postController.editPost);

postRouter.delete('/:id', postController.deletePost);

module.exports = postRouter;
