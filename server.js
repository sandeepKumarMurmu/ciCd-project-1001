require("dotenv").config();

// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    console.log(`Endpoint: ${req.originalUrl}`);
    console.log(`IP Address: ${req.ip}`);
    console.log(`Host: ${req.hostname}`);
    next(); // Call the next middleware or route handler
});

// Dummy GET route
app.get('/dummy', (req, res) => {
   return res.send('GET request to /dummy123459');
});

// Dummy POST route
app.post('/dummy', (req, res) => {
    return res.send('POST request to /dummy');
});

// Dummy PUT route
app.put('/dummy', (req, res) => {
    return res.send('PUT request to /dummy');
});

// Dummy DELETE route
app.delete('/dummy', (req, res) => {
    return res.send('DELETE request to /dummy');
});

// Dummy PATCH route
app.patch('/dummy', (req, res) => {
    return res.send('PATCH request to /dummy');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
