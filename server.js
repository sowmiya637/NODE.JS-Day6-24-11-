const express = require("express");
const cors = require("cors");       
const morgan = require("morgan");    
const app = express();

//  Global Middleware

app.use(cors());                   
app.use(morgan("tiny"));             
app.use(express.json());    //built-in middleware   

app.use((req, res, next) => {
    console.log(`Global Logger → ${req.method} ${req.url}`);
    next();                           // Continue to next middleware/route
});
//  Route-Level Middleware

function checkAuth(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    // Simulate token verification
    if (token === "Bearer 12345") {
        next(); // authorized
    } else {
        res.status(403).json({ error: "Forbidden" });
    }
}
// Routes

// Public Route
app.get("/", (req, res) => {
    res.send("Welcome to E-Commerce API!");
});

// Login route 
app.post("/login", (req, res) => {
    console.log("Login Data:", req.body);
    res.json({ message: "Login successful!", token: "Bearer 12345" });
});

// Protected route (Route-level middleware applied)
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
