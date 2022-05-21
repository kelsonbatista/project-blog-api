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

module.exports = {
  getUsers,
};
