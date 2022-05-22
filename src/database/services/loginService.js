// const Joi = require('joi');
const { Op } = require('sequelize');
const generateToken = require('../../utils/generateToken');
const { User } = require('../models');

const checkEmailPassword = async (email, password) => {
  const response = await User.findOne({ where: { [Op.and]: [{ email }, { password }] } });
  return response;
};

const getToken = async (userPayload) => {
  const token = await generateToken(userPayload);
  return token;
};

module.exports = {
  getToken,
  checkEmailPassword,
};
