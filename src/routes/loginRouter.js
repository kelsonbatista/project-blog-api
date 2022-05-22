const express = require('express');
const { validateLogin } = require('../middlewares/validateLoginMiddleware');
const loginController = require('../database/controllers/loginController');

const loginRouter = express.Router();

loginRouter.get('/', validateLogin, loginController);

module.exports = loginRouter;
