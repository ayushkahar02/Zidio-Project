const express = require("express");
const router = express.Router();
const User = require("../models/userSchema"); // Import User model
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");

// User Registration Route

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Input validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        console.log("Original Password :", password);

        // Hash password
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);
        // console.log("Hashed Password at Registration:", hashedPassword);

        // Create new user
        // user = new User({ name, email, password: hashedPassword });
        user = new User({ name, email, password });

        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// User Login Route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Input validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Check if the user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log("User found in database:", { email: user.email, id: user._id });
        console.log("Entered Password (Trimmed):", password.trim());
        console.log("Stored Hashed Password (Trimmed):", user.password.trim());

        
        // Compare entered password with stored hashed password
        const isMatch = await bcrypt.compare(password,user.password);
        // console.log("bcrypt.compare() Result:", user.password);
        console.log("bcrypt.compare() Result:", password);
        console.log("bcrypt.compare() Result:", isMatch);

        

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        // Generate JWT Token
        const token = jwt.sign({ userId: user._id }, "your_secret_key", { expiresIn: "1h" });

        res.status(200).json({ token, message: "Login successful" });
    } catch (err) {
        console.error("Server error:", err);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
