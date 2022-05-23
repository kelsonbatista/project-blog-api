const express = require('express');
const categoryController = require('../database/controllers/categoryController');
const authToken = require('../middlewares/authTokenMiddleware');

const categoryRouter = express.Router();

categoryRouter.get('/', authToken, categoryController.getCategories);

categoryRouter.post('/', categoryController.createCategory);

module.exports = categoryRouter;
