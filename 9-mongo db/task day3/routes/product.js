const express = require("express");
const router = express.Router();
const Product = require("../schemas/product");

//Create New Product
router.post("/", async (req, res) => {
  const body = req.body;
  console.log(body);
  const newProduct = new Product({
    name: body.name || "undefined",
    price: body.price || "undefined",
    stock:body.stock || "undefined",
    categories: body.categories || "undefined",
  });
  console.log(newProduct);
  const product = await newProduct
  product.save().catch((error) => {
    console.log(error);
  });
  res.send(product);
});

//Get all products
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page || "1");
  const perPage = parseInt(req.query.perPage || "10");
  const allProduct = await Product.find()
    .skip((page - 1) * perPage)
    .limit(perPage).populate({ 
      path: 'users',
      populate: {
        path: 'products',
        model: 'Product'
      } 
   });
  res.send(allProduct);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Product.deleteOne({ _id: id }).catch((error) => {
    res.status(404).send(error);
  });
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const result = await Product.updateOne({ _id: id }, body).catch((error) => {
    res.status(404).send(error);
  });
  res.send(result);
});


module.exports = router;
