const express = require("express");
const app = express();

// Import router
const userRoutes = require("./routes/users");

app.use("/users", userRoutes); // Mount router at /users

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
