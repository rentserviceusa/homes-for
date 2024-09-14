const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.use('/', express.static("publick"));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
