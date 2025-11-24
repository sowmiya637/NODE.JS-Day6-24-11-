const express = require("express");
const app = express();

// Normal route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Route that causes error
app.get("/error", (req, res) => {
  throw new Error("This is a test error");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message); // logs error in terminal
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
