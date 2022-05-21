const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const userService = require('../services/userService');

const getUsers = async (_req, res, _next) => {
  try {
    const users = await userService.getUsers();
    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const createUser = async (req, res, _next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userService.createUser(displayName, email, password, image);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const editUser = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const userInfo = req.body;
    const user = await userService.editUser(id, userInfo);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const deleteUser = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  getUsers,
  createUser,
  editUser,
  deleteUser,
};
