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
    if (!token) return next({ status: StatusCodes.UNAUTHORIZED, message: 'Token not found' });
    const decoded = jwt.verify(token, secret);
    const user = await getUserEmail(decoded.data.email);
    req.user = user;
    if (!user) return next({ status: StatusCodes.NOT_FOUND, message: 'User not found' });
    next();
  } catch (error) {
    console.log(`Error: ${error}`);
    next({ status: StatusCodes.UNAUTHORIZED, message: 'Expired or invalid token' });
  }
};

module.exports = authToken;
