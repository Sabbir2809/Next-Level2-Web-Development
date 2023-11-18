// import http module
const http = require('http');

// create server & createServer Method call
const server = http.createServer((req, res) => {
  res.end('Hello Node.js');
});

// port
server.listen(5000, () => {
  console.log('Success');
});
