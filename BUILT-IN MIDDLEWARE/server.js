const express = require("express");
const app = express();

app.use(express.json()); // parse JSON request body

// app.post("/users", (req, res) => {
//   console.log(req.body); // Access the sent JSON
//   res.json({ message: "User created", data: req.body });
// });
app.post("/users", (req, res) => {
  console.log(req.body); // Access the sent JSON
  res.json({ message: "User created", data: req.body });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
