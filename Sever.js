const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Read the text file
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Internal Server Error');
      return;
    }

    // Set the response header
    res.setHeader('Content-Type', 'text/plain');

    // Send the file content as the response
    res.end(data);
  });
});

// Start the server on port 8081
server.listen(8081, '127.0.0.1', () => {
  console.log('Server is running at http://127.0.0.1:8081/');
});
