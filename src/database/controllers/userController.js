const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService');

const getUsers = async (_req, res, next) => {
  try {
    const users = await userService.getUsers();
    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userService.createUser(displayName, email, password, image);
    return res.status(StatusCodes.CREATED).json(user);
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
  createUser,
  editUser,
  deleteUser,
};
