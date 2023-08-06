const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../schemas/user");
const Product = require("../schemas/product");
const { createHash } = require("crypto");
const { decode } = require("punycode");
require("dotenv").config();

const hash = (password) =>
  createHash("sha256").update(password, "utf-8").digest("hex");

const registerModel = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  // check if user already exist
  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }

  const newUser = await User.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: hash(password),
  }).catch((error) => {
    console.log(error);
  });
  // Create token
  const token = jwt.sign(
    { user_id: newUser._id, email },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );
  // save user token
  newUser.token = token;

  res
    .status(200)
    .json({ message: "Register Successfully", email: newUser.email, token });
};

const loginModel = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && hash(password, user.password)) {
      // Create token
      const token = jwt.sign({ user }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });

      // save user token
      user.token = token;

      // user
      return res.status(200).json({ email: user.email, token });
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

const verifyToken = (req, res, next) => {
  try {
    // const token = req.body.token
    const [_, token] = req.headers.authorization?.split(" ");
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ status: "error", message: "Unauthenticated" });
  }
};

const addProductToUser = async (req, res) => {
  const { productId } = req.body;
  // const product = await Product.findById(productId);

  console.log(req.user);

  const product = await Product.findByIdAndUpdate(productId, {
    $addToSet: { users: req.user },
  }); 

  const user = await User.findByIdAndUpdate(req.user._id, {
    $addToSet: { products: product },
  });

  res.status(200).json({
    message: "Product added to User Successfully",
    email: user.email,
    product: product,
  });
};

module.exports = { loginModel, registerModel, verifyToken, addProductToUser };
