const express = require("express");
const router = express.Router();
const Movie = require("../schemas/movies");

// router.get("/", (req, res) => {
//   console.log("New");
//   res.send("Hello World");
// });

router.post("/", async (req, res) => {
  const body = req.body;
  const newMovie = new Movie({
    title: body.title || "undefined",
    director: body.director || "undefined",
    published_date: body.published_date || "undefined",
    genre: body.genre || "undefined",
    rating: body.rating || "undefined",
  });
  const data = await newMovie.save().catch((err) => {
    console.log(err);
  });
  res.send(data);
});

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page || "1");
  const perPage = parseInt(req.query.per_page || "10");
  const minRating = parseInt(req.query.minRating || "0");
  const maxRating = parseInt(req.query.maxRating || "10");

  const query = { rating: { $gte: minRating, $lte: maxRating } };

  if (req.query.genre) {
    query.genre = { $in: req.query.genre };
  }

  const projection = { title: 1, rating: 1, genre: 1 };

  const movies = await Movie.find(query, projection)
    .skip((page - 1) * perPage)
    .limit(perPage);
  res.send(movies);
});

module.exports = router;
