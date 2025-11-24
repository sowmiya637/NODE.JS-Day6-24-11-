const express = require("express");
const app = express();
const path = require("path");

// Serve static files from "public" folder
app.use(express.static("public"));

// Example route
app.get("/", (req, res) => {
  res.send(`
    <h1>Express Static Example</h1>
    <img src="/overdue.png" alt="Logo" />
    <link rel="stylesheet" href="/style.css">
    <script src="/script.js"></script>
  `);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
