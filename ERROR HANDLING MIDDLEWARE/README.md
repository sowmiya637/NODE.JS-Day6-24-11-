

# ⚠️ Express.js – Error Handling Middleware Example

This project demonstrates how to use **Express.js error-handling middleware** to catch and respond to errors in a clean and structured way.

---

##  Overview

* A normal route (`/`) returns "Home Page".
* A special route (`/error`) throws an intentional error.
* A custom **error handling middleware** catches the error and sends a JSON response with a 500 status code.

---

## 📁 Project Structure

```
project/
│── server.js
│── README.md
```

---

## 📦 Installation

Install Express:

```bash
npm init -y
npm install express
```

Run the server:

```bash
node server.js
```

---

## 🧠 What is Error Handling Middleware?

In Express, error-handling middleware is a special type of middleware used to catch:

* Runtime errors
* Thrown errors
* Asynchronous errors (if used properly)
* Any error passed using `next(err)`

### ✔ Signature (VERY IMPORTANT)

Error middleware **must** have **4 parameters**:

```js
(err, req, res, next)
```

If Express sees 4 parameters, it knows this function is meant for error handling.

---

## 🧩 How It Works

1. If a route throws an error (like in `/error`)
2. Express immediately skips all normal routes
3. It moves directly to the **error-handling middleware**
4. Middleware logs the error and sends a meaningful response

---

## 🧪 Routes in This Project

### `/` – Normal Route

```
GET /
```

Response:

```
Home Page
```

### `/error` – Route That Throws Error

```
GET /error
```

Throws:

```js
throw new Error("This is a test error");
```

This triggers the error-handling middleware automatically.

---

## 🛡️ Error Handling Middleware (Important Section)

```js
app.use((err, req, res, next) => {
  console.error(err.message); // logs in terminal

  res.status(500).json({
    message: "Something went wrong!",
    error: err.message
  });
});
```

### ✔ What it does?

* Logs error message in terminal
* Sends a **500 Internal Server Error** response
* Shows a clean error message to user

---

## 📜 Full Code (server.js)

```js
const express = require("express");
const app = express();

// Normal route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Route that causes error
app.get("/error", (req, res) => {
  throw new Error("This is a test error");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message); // logs error in terminal
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

| Concept          | Explanation                                            |
| ---------------- | ------------------------------------------------------ |
| Error middleware | Special middleware for handling errors                 |
| Signature        | `(err, req, res, next)`                                |
| `/error` route   | Deliberately throws an error                           |
| Behavior         | Skips normal routes, directly goes to error middleware |
| Benefit          | Prevents server crash & sends a clean response         |

