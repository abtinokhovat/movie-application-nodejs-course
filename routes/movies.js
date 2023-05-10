const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// Create movie
router.post("/", async (req, res) => {
  const { title, director, genre, year, imageUrl } = req.body;

  const movie = new Movie({
    title,
    director,
    genre,
    year,
    imageUrl,
  });

  try {
    const savedMovie = await movie.save();
    res.status(200).send(savedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving movie");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const movie = awaitMovie.findById(id).exec();
  res.status(200).send(movie);
});

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find().exec();
    res.status(200).send(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting movies");
  }
});

// Update a movie by ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, director, genre, year, imageUrl } = req.body;

  try {
    const movie = await Movie.findByIdAndUpdate(
        id,
        { title, director, genre, year, imageUrl },
        { new: true }
    ).exec();

    res.status(200).send(movie);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating movie");
  }
});

// Delete a movie by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findByIdAndDelete(id).exec();
    res.status(200).send(movie);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting movie");
  }
});

module.exports = router;
