const { registerModel, loginModel, addProductToUser } = require("../models/userModel");

const registerController = (req, res, next) => {
  try {
    registerModel(req, res);
  } catch (error) {
    console.log(error);
  }
};

//For Register Page
const loginController = (req, res) => {
  try {
    loginModel(req, res);
  } catch (error) {
    return res
      .status(401)
      .json({ status: "error", message: "Unauthentication" });
  }
};

const addProductToUserController = (req, res) => {
  try {
    addProductToUser(req, res);
  } catch (error) {
    return res
      .status(401)
      .json({ status: "error", message: "Unauthentication" });
  }
};

module.exports = {loginController, registerController, addProductToUserController};
