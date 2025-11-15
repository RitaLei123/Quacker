// app.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use user routes for '/api/users'
app.use('/api/users', userRoutes);

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// All other GET requests not handled by your API routes will be sent 
// to the React app's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

module.exports = app;
