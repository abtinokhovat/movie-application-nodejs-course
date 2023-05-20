const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/", async (req, res) => {
    const movies = await Movie.find().exec();
    res.send(movies);
  });

module.exports = router;
