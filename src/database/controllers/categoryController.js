const { StatusCodes } = require('http-status-codes');
const categoryService = require('../services/categoryService');

const getCategories = async (_req, res, next) => {
  try {
    const category = await categoryService.getCategories();
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return next({ status: StatusCodes.BAD_REQUEST, message: '"name" is required' });
    }
    const category = await categoryService.createCategory(name);
    return res.status(StatusCodes.CREATED).json(category);
  } catch (error) {
    console.log(`Error: ${error}`);
    next(error);
  }
};

module.exports = {
  getCategories,
  createCategory,
};
