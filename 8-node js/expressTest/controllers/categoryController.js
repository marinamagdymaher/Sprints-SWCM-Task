import {
  readCategoryProduct,
  getSingleCategory,
  deleteCategory,
} from "../models/category.js";

export const getAllCategory = async (req, res) => {
  const allCategories = await readCategoryProduct();
  res.send(allCategories);
};

export const categoryHandler = async (req, res) => {
  const category = getSingleCategory(req.params.id);
  res.send(category);
};

export const deletedCategory = async (req, res) => {
  const deleted = deleteCategory(req.params.id);
  res.send(deleted);
};
