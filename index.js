const express = require("express");
const path = require("path");

const app = express();

// serve static files from /src
app.use(express.static(path.join(__dirname, "src")));

// route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Azure gives PORT automatically
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});