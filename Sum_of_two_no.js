const http = require('http');

const server = http.createServer((req, res) => {
  // Define the two numbers
  const a = 1;
  const b = 2;

  // Calculate the sum
  const c = a + b;

  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Send the sum as the response
  res.end(`Value of C: ${c}`);
});

// Start the server on port 9090
server.listen(9090, 'localhost', () => {
  console.log('Server is running at http://localhost:9090/');
});
