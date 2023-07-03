import { readProduct } from "./products.js";

let categories = [];

export const readCategoryProduct = async () => {
  if (categories.length <= 0) {
    const allProduct = await readProduct();
    categories = allProduct.map((item) => item.category);
    categories = categories.reduce((unique, item) => {
      if (!unique.some((obj) => obj.id === item.id)) {
        unique.push(item);
      }
      return unique;
    }, []);
    categories.sort((a, b) => a.id - b.id);
  }
  return categories;
};

export const getSingleCategory = (catId) => {
  const category = categories.find((item) => item.id === +catId);
  return category;
};

export const deleteCategory = (catId) => {
  const deletedData = categories.find((item) => item.id === +catId);
  categories = categories.filter((item) => item.id !== +catId);
  return deletedData;
};
