const express = require("express");
const router = express.Router();

// GET /users
router.get("/", (req, res) => {
  res.send("List of users");
});

// POST /users
router.post("/", (req, res) => {
  res.send("Create a user");
});

// GET /users/:id
router.get("/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;  //export the router object in server.js
