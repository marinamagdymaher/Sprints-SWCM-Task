const express = require("express");
const router = express.Router();
const {registerController,loginController} = require("../controllers/userControllers")


// Register
router.post("/register",registerController);

// Our login logic starts here
router.post("/login", loginController);

module.exports = router;
