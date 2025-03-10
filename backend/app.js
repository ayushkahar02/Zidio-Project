const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
const port = 8080;

// Middleware
app.use(express.json()); // To handle JSON data
app.use(cors()); // Allow frontend to access backend

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Zidio_Project"; 

// MongoDB Connection
mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ DB Connection Error:", err));


// Import and use routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes); // Prefix API routes

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

