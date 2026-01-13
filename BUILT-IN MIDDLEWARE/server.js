const express = require("express");
const app = express();

app.use(express.json()); // parse JSON request body
// To test this, you can send a POST request to http://localhost:3000/users
// with a JSON body using a tool like Postman or curl.
app.post("/users", (req, res) => {
  console.log(req.body); // Access the sent JSON
  res.json({ message: "User created", data: req.body });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

