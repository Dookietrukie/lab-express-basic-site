const express = require("express");
const app = express();

app.use(express.static("public"));

// Home
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

// About
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

// Set up listener
app.listen(3000, () => {
  console.log("Listening... PORT 3000.");
});
