const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
  addProductToUserController
} = require("../controllers/userControllers");
const { verifyToken } = require("../models/userModel");

// Register
router.post("/register", registerController);

// Our login logic starts here
router.post("/login", loginController);

router.post("/product/:id", [verifyToken], addProductToUserController);
// router.post("/login/product/:id", addProductToUser);

module.exports = router;
