require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const moviesRoutes = require("./routes/movies.js")
const productRoutes = require("./routes/product.js")
const usersRoutes = require("./routes/user.js")
const {verifyToken} = require("./models/userModel")

mongoose
  .connect(process.env.CONNECTION_STRING, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

// body parser middleware to pare the body of every request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/movies', moviesRoutes);
app.use('/product', [verifyToken], productRoutes);
app.use('/users', usersRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
