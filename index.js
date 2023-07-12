const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static('public'));

// Route handler for form submission
app.post('/submit', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.send('Please provide both a username and password.');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
