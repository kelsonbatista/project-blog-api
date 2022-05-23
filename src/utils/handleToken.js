const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

// JWT = HEADER + PAYLOAD(BODY OU DIRETO DO BANCO) + SECRET
// CONFIG DO HEADER
const headersConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign({ data: payload }, secret, headersConfig);
  return token;
};

const getToken = async (userPayload) => {
  const token = await generateToken(userPayload);
  return token;
};

module.exports = {
  getToken,
  generateToken,
};
