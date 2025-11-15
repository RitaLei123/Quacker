// routes/userRoutes.js

const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// POST route to create a new user
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user instance
    const newUser = new User({ name, email, password });

    // Save the user to the database
    await newUser.save();

    // Respond with the new user data
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
