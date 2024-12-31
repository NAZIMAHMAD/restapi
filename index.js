const express = require("express");
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.json({"message": "I am OK"});
});

// Export the app to work with Vercel
module.exports = app;
