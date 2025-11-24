
# 📘 Express.js – Custom Middleware Example

This project demonstrates how to create and use **custom middleware** in an Express.js application.
The middleware logs the request method and URL for every incoming request.

---

## 🚀 Project Overview

* A custom middleware function (`logger`) is created.
* The middleware logs each request in the format:

  ```
  METHOD URL
  ```

  Example:

  ```
  GET /
  ```
* The middleware is applied **globally** using `app.use()`.
* Two basic routes (`/` and `/about`) respond with simple text.

---

## 📁 Project Structure

```
project/
│── server.js
│── README.md
```

---

## 📦 Installation

Install dependencies:

```bash
npm init -y
npm install express
```

Run the server:

```bash
node server.js
```

---

## 🧠 What is Middleware?

Middleware is a function that runs **between** the request and response cycle in Express.

Every middleware receives:

* `req` → Request object
* `res` → Response object
* `next()` → Pass control to the next middleware or route handler

Middleware is useful for:

✔ Logging
✔ Authentication
✔ Validations
✔ Parsing data
✔ Error handling

---

## 🛠️ Custom Middleware Used in This Project

### The middleware function:

```js
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to next handler
}
```

### Why `next()` is required?

Without `next()`, the request will **never** reach the route (Ex: `/about`, `/`).
`next()` tells Express:

➡ “I’m done. Move to the next middleware or route.”

---

## 🌍 Applying Middleware Globally

To apply the middleware for **every request**, we use:

```js
app.use(logger);
```

This means `/`, `/about`, and any future routes will always be logged.

---

## 🧪 Example Routes

### Root Route

```
GET /
```

Response:

```
Home Page
```

### About Route

```
GET /about
```

Response:

```
About Page
```

---

## 📜 Full Code (server.js)

```js
const express = require("express");
const app = express();

// Custom middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

// Apply middleware globally
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

---

##  Summary

| Concept           | Explanation                                   |
| ----------------- | --------------------------------------------- |
| Middleware        | A function that runs before the route handler |
| Custom Middleware | Developer-defined middleware                  |
| logger            | Logs the HTTP method + URL                    |
| app.use(logger)   | Applies middleware globally                   |
| next()            | Moves request to next handler                 |


