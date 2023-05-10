var express = require("express");
var router = express.Router();
var Movie = require("../models/movie");

// Get all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find().exec();
  res.render("movies", { movies });
});

module.exports = router;
