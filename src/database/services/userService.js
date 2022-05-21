const { User } = require('../models');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const createUser = async (displayName, email, password, image) => {
  const users = await User.create({ displayName, email, password, image });
  return users;
};

const editUser = async (id, userInfo) => {
  const user = await User.update({ id, ...userInfo }, { where: { id } });
  return user;
};

module.exports = {
  getUsers,
  createUser,
  editUser,
};
