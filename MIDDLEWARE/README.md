
#  Express.js – Complete Middleware Concepts (Global, Built-in, Route-level)

This project demonstrates **all important middleware concepts** in Express.js, including:

* ✔ Global Middleware
* ✔ Built-in Middleware
* ✔ Third-party Middleware
* ✔ Route-level Middleware
* ✔ Custom Middleware
* ✔ 404 Handler Middleware


##  Purpose of This Project

This example simulates an **E-Commerce API** to demonstrate:

* Logging requests
* Handling JSON bodies
* CORS support
* Authentication middleware
* Protected routes
* Error handling (404)

---

# 🧠 What is Middleware?

Middleware are **functions that run before the actual route handler**.

They sit between the **incoming request** and the **response**.

Each middleware receives:

* `req` → Request object
* `res` → Response object
* `next()` → Moves to the next middleware or route

If `next()` is not called → request is stuck forever.

---

# 🧩 Types of Middleware in This Project

---

## 1️⃣ **Built-in Middleware**

### ✔ `express.json()`

Used to parse incoming JSON data.

```js
app.use(express.json());
```

Purpose:
Converts JSON → JavaScript object stored in `req.body`.

---

## 2️⃣ **Third-Party Middleware**

Express allows using external NPM packages as middleware.

### ✔ CORS Middleware

Allows frontend (React, Angular, etc.) to communicate with the server.

```js
app.use(cors());
```

### ✔ Morgan Middleware

Logs every incoming HTTP request.

```js
app.use(morgan("tiny"));
```

Example terminal log:

```
GET /profile 200 - 12 ms
```

---

## 3️⃣ **Global Middleware**

Runs for **every request** in the application.

```js
app.use((req, res, next) => {
    console.log(`Global Logger → ${req.method} ${req.url}`);
    next();
});
```

✔ Logs request method and path
✔ Runs before all routes

---

## 4️⃣ **Route-Level Middleware**

Middleware applied only for specific routes.

Example: **Authentication Check**

```js
function checkAuth(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    if (token === "Bearer 12345") {
        next(); 
    } else {
        res.status(403).json({ error: "Forbidden" });
    }
}
```

Applied only on protected route:

```js
app.get("/profile", checkAuth, (req, res) => {
    res.json({ username: "sowmiya", email: "sowmiya@example.com" });
});
```

✔ If no token → 401
✔ If invalid token → 403
✔ If valid → continue to route

---

## 5️⃣ **404 Handler Middleware**

Catches any route not matched above.

```js
app.use((req, res) => {
    res.status(404).json({ error: "Route Not Found" });
});
```

📌 Always written at the **bottom** of all routes.

---

# 📜 Full Code

```js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Global Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Custom global logger
app.use((req, res, next) => {
    console.log(`Global Logger → ${req.method} ${req.url}`);
    next();
});

// Route-Level Middleware
function checkAuth(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    if (token === "Bearer 12345") {
        next();
    } else {
        res.status(403).json({ error: "Forbidden" });
    }
}

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to E-Commerce API!");
});

app.post("/login", (req, res) => {
    console.log("Login Data:", req.body);
    res.json({ message: "Login successful!", token: "Bearer 12345" });
});

app.get("/profile", checkAuth, (req, res) => {
    res.json({
        username: "sowmiya",
        email: "sowmiya@example.com",
        role: "customer"
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route Not Found" });
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

| Middleware Type    | Example Used             | Purpose                  |
| ------------------ | ------------------------ | ------------------------ |
| **Built-in**       | `express.json()`         | Parse JSON request body  |
| **Third-party**    | `cors()`, `morgan()`     | CORS + Logging           |
| **Global**         | `app.use(logger)`        | Runs for every request   |
| **Route-level**    | `checkAuth`              | Protect `/profile` route |
| **404 Middleware** | `app.use((req,res)=>{})` | Catch invalid routes     |


