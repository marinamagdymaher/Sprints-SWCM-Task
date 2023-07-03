import {
  loginValidation,
  registerValidation,
  registerModel,
  loginModel,
} from "../models/user.js";

// For View
export const registerController = (req, res, next) => {
  try {
    registerModel(req, res);
  } catch (error) {
    console.log(error);
  }
};

//For Register Page
export const loginController = (req, res) => {
  try {
    loginModel(req, res);
  } catch (error) {
    return res
      .status(401)
      // .json({ status: "error", message: "Unauthentication" });
  }
};

// const Schema = mongoose.Schema;
// const mongoose = require('mongoose');
// const userSchema = new Schema({
//   email: { type: String, unique: true, lowercase: true },
//   password: String,
// });

// export const User = allUsers.push(userSchema);
