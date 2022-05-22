const { User } = require('../models');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUserEmail = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  return userEmail;
};

const createUser = async (displayName, email, password, image) => {
  const users = await User.create({ displayName, email, password, image });
  return users;
};

const editUser = async (id, userInfo) => {
  const user = await User.update({ id, ...userInfo }, { where: { id } });
  return user;
};

const deleteUser = async (id) => {
  const user = await User.destroy({ where: { id } });
  return user;
};

module.exports = {
  getUsers,
  getUserEmail,
  createUser,
  editUser,
  deleteUser,
};
