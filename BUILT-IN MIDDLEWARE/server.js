const express = require("express");
const app = express();

app.use(express.json()); // parse JSON request body
<<<<<<< HEAD

// app.post("/users", (req, res) => {
//   console.log(req.body); // Access the sent JSON
//   res.json({ message: "User created", data: req.body });
// });
=======
// To test this, you can send a POST request to http://localhost:3000/users
// with a JSON body using a tool like Postman or curl.
>>>>>>> af9e7243c0e6fc65ec245554cd206c998a740350
app.post("/users", (req, res) => {
  console.log(req.body); // Access the sent JSON
  res.json({ message: "User created", data: req.body });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

