const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { getUserEmail } = require('../database/services/userService');

const secret = process.env.JWT_SECRET;

const authToken = async (req, _res, next) => {
  // verifica se o token existe no header
  // verifica se o token é valido
  // verifica se o usuario do token informado existe no banco de dados
  // se o usuario nao existe, retorna erro, caso contrario segue o middleware
  try {
    const token = req.headers.authorization;
    if (!token) next({ status: StatusCodes.UNAUTHORIZED, message: 'Token not found' });
    const decoded = jwt.verify(token, secret);
    const userIsValid = await getUserEmail(decoded.data.email);
    if (!userIsValid) next({ status: StatusCodes.NOT_FOUND, message: 'User not found' });
    next();
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

module.exports = authToken;
