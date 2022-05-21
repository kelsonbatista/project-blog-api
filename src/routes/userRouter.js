const express = require('express');
const userController = require('../database/controllers/userController');

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);

userRouter.post('/', userController.createUser);

userRouter.put('/:id', userController.editUser);

module.exports = userRouter;
