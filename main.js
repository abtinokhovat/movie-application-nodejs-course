const express = require("express");
const mongoose = require("mongoose");
const movieRouter = require("./routes/movies");

// 1. Build a webserver
const app = express();
const PORT = 3000;

// 2. Connect to a Mongodb Database
mongoose.connect("mongodb://localhost:27017/movies");

mongoose.connection.on("connected", () => {
  console.log("Connected To Mongodb");
});

// 3. Fetch some data from Database
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.use("/movies", movieRouter);

app.listen(PORT, () => {
  console.log("App Started on port 3000");
});
