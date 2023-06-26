import {
  readProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
  createSingleProduct,
} from "../models/products.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await readProduct();
    console.log(products);
    return res.send(products);
  } catch (err) {
    console.log(err);
    res.status(401).json(JSON.parse(err.message));
  }
};

export const productHandler = async (req, res) => {
  const product = await getSingleProduct(req.params.id);
  return res.send(product);
};

export const deleteProduct = async (req, res) => {
  const productDel = await deleteSingleProduct(req.params.id);
  return res.send(productDel);
};

export const updateProduct = async (req, res) => {
  const productUpdate = await updateSingleProduct(req.body);
  return res.send(`Product with id: ${productUpdate.id} Updated Successfully.`);
};

export const createProduct = async (req, res) => {
  const productUpdate = await createSingleProduct(req.body);
  return res.send(`New product added ${ productUpdate }`);
};
