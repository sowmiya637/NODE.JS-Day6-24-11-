
# 📘 Express.js – Serving Static Files Example

This project demonstrates how to use **express.static()** to serve static assets such as:

* Images
* CSS files
* JavaScript files
* HTML files

Express static middleware allows you to build frontend pages using files stored in a **public** folder.

---

## 📁 Project Structure

```
project/
│── server.js
│── public/
│     ├── overdue.png
│     ├── style.css
│     └── script.js
│── README.md
```

---

## 🚀 What This Project Does

* Uses **express.static()** to serve files from the `public` directory.
* Accesses image, CSS, and JavaScript from `public` folder.
* Loads these static files inside a route.

---

## 🧠 What is express.static()?

`express.static()` is a **built-in middleware** used to serve static files.

```js
app.use(express.static("public"));
```

This tells Express:

> “If the browser requests any file that exists in the `public` folder, return it automatically.”

Example requests:

| Browser Request | File Served        |
| --------------- | ------------------ |
| `/style.css`    | public/style.css   |
| `/script.js`    | public/script.js   |
| `/overdue.png`  | public/overdue.png |

---

# 📜 server.js

```js
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
```

---

# 📜 public/script.js

```js
console.log("Script loaded from express.static folder!");
```

---

# 📜 public/style.css

```css
body {
  background-color: #b48585;
  font-family: Arial;
}
h1 {
  color: #333;
}
```

---

## 🌍 How It Works

### 1. You visit:

```
http://localhost:3000/
```

### 2. The HTML inside the route loads:

* `/overdue.png`
* `/style.css`
* `/script.js`

All these files are automatically served by:

```js
app.use(express.static("public"));
```

---



| Feature                                      | Benefit                       |
| -------------------------------------------- | ----------------------------- |
| Serves images                                | Faster frontend load          |
| Serves CSS/JS                                | Build full UI in Express      |
| No need for routes for each file             | Express handles automatically |
| Great for small websites or admin dashboards | Simple setup                  |

---

## ✔ Summary

This project shows how to:

* Configure `express.static()`
* Serve static assets from a folder
* Use images, CSS, and JS in Express routes

With static middleware, you can build full frontend pages inside Express.
