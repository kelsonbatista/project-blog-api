const express = require('express');
const userController = require('../database/controllers/userController');

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);

userRouter.post('/', userController.createUser);

userRouter.put('/:id', userController.editUser);

userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
