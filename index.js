// Import dotenv
require('dotenv').config();

// Import express
const express = require('express');

// Import MongoDB connection
require('./DB/connection');

// Import other dependencies
const cors = require('cors');
const router = require('./Routes/router'); // Assumes you have a router in ./Routes/router

// Create server
const fdserver = express();

// Middleware setup
fdserver.use(cors()); // Enable CORS
fdserver.use(express.json()); // Parse JSON data

// Serve static files from the 'uploads' directory
fdserver.use('/uploads', express.static('./uploads'));

// Use the router for handling routes
fdserver.use(router);

// Define port
const PORT = process.env.PORT || 5000;

// Run the server
fdserver.listen(PORT, () => {
    console.log(`Server is running successfully at port: ${PORT}`);
});

// Root route
fdserver.get('/', (req, res) => {
    res.send("Food delivery server is running successfully");
});
