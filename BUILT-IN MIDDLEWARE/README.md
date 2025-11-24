

# 📘 Express.js API – Built-In Middleware Example

This project demonstrates how to use **Express.js built-in middleware** (specifically `express.json()`) to handle JSON request bodies in a POST API.

---

##  Overview

This simple Express server exposes a **POST `/users`** endpoint.

* It accepts JSON data from the client.
* It uses Express’s **built-in middleware** to parse the JSON.
* It returns the same JSON back in the response.

---

## 📁 Project Structure

```
project/
│── server.js
│── README.md
```

---

## 📦 Installation

```
npm init -y
npm install express
```

Run the server:

```
node server.js
```

---

## 🧠 What is Middleware?

**Middleware** is a function that sits between the request and response cycle.
Every request coming to the server passes through middleware before reaching the final route handler.

Middleware has access to:

* `req` → Request object
* `res` → Response object
* `next()` → Pass control to next middleware

---

## 🧩 Types of Middleware in Express

### 1️⃣ **Built-in Middleware**

Middleware that comes bundled with Express.
Examples:

* `express.json()` → parses JSON request bodies
* `express.urlencoded()` → parses form data
* `express.static()` → serves static files

### 2️⃣ **Application-Level Middleware**

You write it using `app.use()`.

### 3️⃣ **Router-Level Middleware**

Works only inside Express Routers.

### 4️⃣ **Error-Handling Middleware**

Runs only when error occurs (`err, req, res, next`).

### 5️⃣ **Third-Party Middleware**

Packages installed from NPM (e.g., morgan, cors).

---

## 🛠️ What is `express.json()`?

`express.json()` is a **built-in middleware** used to parse incoming JSON data.

### ✔ Why we use it?

When a client sends JSON like:

```json
{
  "name": "Sowmiya",
  "age": 22
}
```

Node doesn't understand JSON by default.
`express.json()` converts it into JavaScript object and stores it in:

```
req.body
```

### ✔ Where we use it?

At the top of the file:

```js
app.use(express.json());
```

### ✔ How it works internally?

1. Client sends JSON data.
2. `express.json()` reads the body.
3. Converts JSON → JavaScript object.
4. Stores the result in `req.body`.
5. Your route can access it easily.

---

## 🧪 Example Code (server.js)

```js
const express = require("express");
const app = express();

app.use(express.json()); // Built-in middleware to parse JSON

app.post("/users", (req, res) => {
  console.log(req.body); // Access the JSON body
  res.json({ message: "User created", data: req.body });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

---

## 📤 Making a POST Request (Example)

Use **Postman** or **Thunder Client**:

**URL:**

```
POST http://localhost:3000/users
```

**Body → JSON:**

```json
{
  "name": "Sowmiya",
  "role": "Developer"
}
```

**Response:**

```json
{
  "message": "User created",
  "data": {
    "name": "Sowmiya",
    "role": "Developer"
  }
}
```

| Feature             | Explanation                                     |
| ------------------- | ----------------------------------------------- |
| Middleware          | Functions that run between request and response |
| Built-In Middleware | Provided by Express itself                      |
| express.json()      | Parses JSON bodies                              |
| Purpose             | Makes `req.body` readable                       |
| Used In             | APIs accepting JSON data                        |


