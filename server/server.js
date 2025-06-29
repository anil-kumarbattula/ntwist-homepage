// server.js
const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 for the backend

// Middleware to enable CORS for all origins
// This is crucial for your React app (running on a different port) to communicate with this backend.
app.use(cors());

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log('Login attempt:', { username, password }); // Log for debugging

    // Authentication Logic
    if (username === 'admin' && password === 'Admin') {
        return res.json({ message: 'Login successful', status: 'success' });
    } else {
        return res.status(401).json({ message: 'Error: Invalid credentials', status: 'error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});