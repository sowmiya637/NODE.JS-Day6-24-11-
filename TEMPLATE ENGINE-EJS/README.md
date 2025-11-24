

# 📘 Express.js – EJS Template Engine Example

This project demonstrates how to use **EJS (Embedded JavaScript Templates)** with Express.js to generate dynamic HTML pages on the server side.

---

## 📁 Project Structure

```
project/
│── server.js
│── views/
│     └── index.ejs
│── README.md
```

---

## 🚀 What This Project Demonstrates

* Setting EJS as the view engine
* Rendering an EJS template using `res.render()`
* Passing dynamic data (title, user, items) to the template
* Using EJS syntax (`<%= %>` and `<% %>`)

---

# 🧠 What is EJS?

**EJS (Embedded JavaScript Templates)** allows you to:

* Write HTML combined with JavaScript
* Insert dynamic values
* Loop through arrays
* Conditionally show content

It is one of the most popular template engines used with Express.

---

## 🛠️ Setup View Engine

```js
app.set("view engine", "ejs");
```

This tells Express:

> “Whenever I call `res.render()`, look for `.ejs` files inside the `views` folder.”

---

# 📜 server.js

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs"); // tell Express to use EJS

app.get("/", (req, res) => {
  res.render("index", {   // Render index.ejs file
    title: "Home Page",
    user: "Sowmiya",
    items: ["Frontend", "Backend", "Testing"]
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

---

# 📜 views/index.ejs

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1>Welcome <%= user %>!</h1>
    <ul>
      <% items.forEach(item => { %>
        <li><%= item %></li>
      <% }) %>
    </ul>
  </body>
</html>
```

---

## 🧩 EJS Syntax Explanation

| Syntax   | Meaning                 | Example                 |
| -------- | ----------------------- | ----------------------- |
| `<%= %>` | Output a value          | `<%= user %>`           |
| `<% %>`  | Run JS code (no output) | `<% items.forEach() %>` |
| `<%- %>` | Output unescaped HTML   | `<%- htmlCode %>`       |

---

## ✔ How Rendering Works

### 1. User visits:

```
GET /
```

### 2. Server executes:

```js
res.render("index", { title, user, items })
```

### 3. Inside `index.ejs` the data is used to build:

* Page title
* Welcome message
* List of items

Example final output:

```
Welcome Sowmiya!
• Frontend
• Backend
• Testing
```

| Feature                          | Benefit             |
| -------------------------------- | ------------------- |
| Server-side rendering            | Faster initial load |
| Easy to use                      | HTML + JS           |
| Good for dashboards & admin apps | Dynamic pages       |
| Built-in Express support         | No extra setup      |

---

## ✔ Summary

This project shows how to:

* Configure EJS as a template engine
* Render dynamic pages using `res.render()`
* Use EJS tags to display variables and loop through arrays

EJS helps you build dynamic server-rendered web pages easily.

