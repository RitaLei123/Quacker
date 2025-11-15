// models/userModel.js

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  dateCreated: { 
    type: Date, 
    default: Date.now 
  }
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
