const { User } = require('../models');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const createUser = async (displayName, email, password, image) => {
  const users = await User.create({ displayName, email, password, image });
  return users;
};

module.exports = {
  getUsers,
  createUser,
};
