const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService');
const { getToken } = require('../../utils/handleToken');

const getUsers = rescue(async (_req, res, _next) => {
    const users = await userService.getUsers();
    const newUser = users.map((user) => {
      const { password: passDB, ...userInfo } = user.dataValues;
      return userInfo;
    });
    return res.status(StatusCodes.OK).json(newUser);
});

const getUserById = rescue(async (req, res, _next) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    const { password: passDB, ...userInfo } = user.dataValues;
    return res.status(StatusCodes.OK).json(userInfo);
});

const createUser = rescue(async (req, res, _next) => {
    const { displayName, email, password, image } = req.body;
    await userService.createUser(displayName, email, password, image);
    const token = await getToken({ displayName, email, image });
    return res.status(StatusCodes.CREATED).json({ token });
});

const editUser = rescue(async (req, res, _next) => {
    const { id } = req.params;
    const userInfo = req.body;
    const user = await userService.editUser(id, userInfo);
    return res.status(StatusCodes.OK).json(user);
});

const deleteUser = rescue(async (req, res, _next) => {
    const { id } = req.params.id === 'me' ? req.user.dataValues : req.params;
    await userService.deleteUser(id);
    return res.status(StatusCodes.NO_CONTENT).json({ message: 'User successfully deleted' });
});

module.exports = {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
