const express = require("express");
const app = express();

app.set("view engine", "ejs"); // tell Express to use EJS

app.get("/", (req, res) => {
  res.render("index", {  //render index.ejs file
    title: "Home Page",
    user: "Sowmiya",
    items: ["Frontend", "Backend", "Testing"]
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
