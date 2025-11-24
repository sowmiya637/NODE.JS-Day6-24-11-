const express = require("express");
const app = express();

// Custom middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

//Apply middleware globally for all routes
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
