const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Define the route to serve the user data
app.get('/user', (req, res) => {
  const filePath = path.join(__dirname, './user/user.json');  // Adjust path to user.json

  // Read the contents of user.json
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle error if the file can't be read
      res.status(500).json({ message: 'Error reading the JSON file' });
      return;
    }

    // Parse and send the data as a JSON response
    const userData = JSON.parse(data);
    res.json({ message: "I am OK", user: userData });
  });
});

// Export the express app to be used by Vercel
module.exports = (req, res) => {
  app(req, res);
};
