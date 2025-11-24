

# 📘 Express.js – Router Module Example

This project demonstrates how to use **Express Router** to organize routes into separate files.
Routers help keep your project clean, modular, and easy to maintain.



## 🚀 What This Project Shows

* How to create a **Router** using `express.Router()`
* How to move routes into a separate file
* How to **mount** router using `app.use()`
* How route paths work with a base URL (`/users`)

---

## 🧠 What is Express Router?

Express Router is a mini Express application.
It allows you to:

* Group related routes
* Keep code organized
* Apply middleware to specific router groups

Example use:

```js
const router = express.Router();
```

You define routes on the router instead of the main app.

---

# 📜 server.js

```js
const express = require("express");
const app = express();

// Import router
const userRoutes = require("./routes/users");

app.use("/users", userRoutes); // Mount router at /users

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

### ✔ What `app.use("/users", userRoutes)` does?

It tells Express:

> “All routes inside userRoutes should start with `/users`.”

Example:
If router has:

```js
router.get("/")
```

It becomes:

```
GET /users/
```

---

# 📜 routes/users.js

```js
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

module.exports = router;
```

### Available Routes

| Method | Path         | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | List all users    |
| POST   | `/users`     | Create a new user |
| GET    | `/users/:id` | Get user by ID    |

---

## 🧩 Why Use Routers?

| Without Router                      | With Router                    |
| ----------------------------------- | ------------------------------ |
| All routes inside server.js → messy | Organized in separate files    |
| Hard to manage large apps           | Perfect for scalable apps      |
| No modular structure                | Each module has its own routes |

Perfect for apps like:

* E-commerce
* Social media
* Admin dashboards
* APIs with many endpoints

---



This project demonstrates:

* Creating a router
* Exporting & importing routes
* Mounting router using `app.use()`
* Using route parameters (`req.params.id`)

Routers keep your Express app clean and scalable.

