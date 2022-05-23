const { Category } = require('../models');

const getCategories = async () => {
  const category = await Category.findAll();
  return category;
};

const createCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

module.exports = {
  getCategories,
  createCategory,
};
