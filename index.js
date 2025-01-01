const path = require('path');
const fs = require('fs');

// Define the serverless function to serve the user data
module.exports = (req, res) => {
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
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(userData); // Directly send user data without extra message
  });
};
