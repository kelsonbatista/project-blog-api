const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService');
const { getToken } = require('../../utils/handleToken');

const getUsers = async (_req, res, next) => {
  try {
    const users = await userService.getUsers();
    const newUser = users.map((user) => {
      const { password: passDB, ...userInfo } = user.dataValues;
      return userInfo;
    });
    return res.status(StatusCodes.OK).json(newUser);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    await userService.createUser(displayName, email, password, image);
    const token = await getToken({ displayName, email, image });
    return res.status(StatusCodes.CREATED).json({ token });
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const editUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userInfo = req.body;
    const user = await userService.editUser(id, userInfo);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
