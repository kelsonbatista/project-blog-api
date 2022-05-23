const express = require('express');
const userController = require('../database/controllers/userController');
const { validateUser } = require('../middlewares/validateUserMiddleware');
const authToken = require('../middlewares/authTokenMiddleware');

const userRouter = express.Router();

userRouter.get('/', authToken, userController.getUsers);

userRouter.get('/:id', authToken, userController.getUserById);

userRouter.post('/', validateUser, userController.createUser);

userRouter.put('/:id', userController.editUser);

userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
