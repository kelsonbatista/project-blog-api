const { StatusCodes } = require('http-status-codes');
const { checkEmailPassword } = require('../services/loginService');
const { getToken } = require('../../utils/handleToken');

const doLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userPayload = await checkEmailPassword(email, password);
    if (!userPayload) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid fields' });
    }
    const { password: passDB, ...userInfo } = userPayload.dataValues;
    const token = await getToken(userInfo);
    return res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

module.exports = doLogin;
