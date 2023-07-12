const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  categories: { type: Array, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
