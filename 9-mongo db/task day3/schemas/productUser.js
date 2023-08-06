const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  productsId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  totalPrice: Number,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
