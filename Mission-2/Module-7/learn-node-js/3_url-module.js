// import http module
const http = require('http');
// import url module
const url = require('url');

// create server
const server = http.createServer((req, res) => {
  // url
  let URL = `https://ostad.app/en/dashboard/my-courses?year=2023&month=april`;

  // url object
  let urlObj = url.parse(URL, true);

  // host, pathname, search
  let hostName = urlObj.host;
  let pathName = urlObj.pathname;
  let searchName = urlObj.search;

  // response
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(searchName);
  res.end();
});

server.listen(5000, () => {
  console.log('Server is Running...');
});
