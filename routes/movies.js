const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// Get all movies
router.get("/", async (req, res) => {
  const movies = Movie.find().exec();
  res.send(movies);
});

module.exports = router;
