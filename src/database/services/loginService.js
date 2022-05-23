// const Joi = require('joi');
const { Op } = require('sequelize');
const { User } = require('../models');

const checkEmailPassword = async (email, password) => {
  const response = await User.findOne({ where: { [Op.and]: [{ email }, { password }] } });
  return response;
};

module.exports = {
  checkEmailPassword,
};
