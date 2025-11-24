
#  Express.js Pug Template Example

This project demonstrates how to use **Pug** as a template engine in **Express.js**.
It covers routing, rendering dynamic data, and Pug syntax basics.

---

##  Features

* Express.js setup with Pug template engine
* Dynamic data rendering
* Clean, indentation-based Pug templates
* Example of variables, loops, and template rendering

## 📥 Installation

```bash
npm install
```

If Express and Pug are not installed:

```bash
npm install express pug
```

---

## ▶️ Run the Server

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 📌 server.js (Main File)

```js
const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    user: "Sowmiya",
    items: ["Frontend", "Backend", "Testing"]
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

---

## 📝 index.pug (Template File)

```pug
doctype html
html
  head
    title= title
  body
    h1 Welcome #{user}!
    ul
      each item in items
        li= item
```

---

## 🔍 Pug Syntax Summary

| Feature         | Example               | Description        |
| --------------- | --------------------- | ------------------ |
| **Variables**   | `#{user}`             | Print JS variable  |
| **Tags**        | `h1 Welcome`          | No closing tags    |
| **Loop**        | `each item in items`  | Loop through array |
| **Attributes**  | `img(src="logo.png")` | HTML attributes    |
| **Indentation** | via spacing           | Defines structure  |

---

## 💡 Explanation

* **app.set("view engine", "pug")** → Express will use Pug to render views
* **res.render("index", data)** → Loads `index.pug` and passes variables
* Pug uses **indentation instead of HTML closing tags**
* Very clean and fast template syntax

---

## ✔ Output Example

When visiting `/`, you will see:

```
Welcome Sowmiya!
- Frontend
- Backend
- Testing
```

