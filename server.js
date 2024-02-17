const express = require('express');
const bodyParser = require('body-parser');
require('dotenv-flow').config();
const mongoose = require('mongoose');

// Establish database connection
require('./lib/connection/index');

// Import models and authentication module
const models = require('./lib/models');
const { AuthenticationModule } = require('pxf-user-module');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Initialize the AuthenticationModule with the Staff model
const staffAuthModule = new AuthenticationModule(models.staff);

// Registration endpoint
app.post('/register', async (req, res) => {
  try {
    const newStaff = await staffAuthModule.register(req.body);
    res.status(201).json({ message: 'Staff registered successfully', staff: newStaff });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const staff = await staffAuthModule.login(req.body.email, req.body.password);
    res.status(200).json({ message: 'Login successful', staff });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
