const fs = require('fs');
const http = require('http');
const port = 5050;

const server = http.createServer((req, res) => {
  // :::::: 1. readFile() ::::::
  // if (req.url === '/') {
  //   fs.readFile('index.html', (error, data) => {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // :::::: 1. readFileSync() ::::::
  // if (req.url === '/') {
  //   let data = fs.readFileSync('index.html');
  //   res.writeHead(200, { 'Context-Type': 'text/html' });
  //   res.write(data);
  //   res.end();
  // }
  // :::::: 2. writeFile() ::::::
  // if (req.url === '/') {
  //   fs.writeFile('test.txt', 'Hello, Node JS', (error) => {
  //     if (error) {
  //       res.writeHead(400, { 'Context-Type': 'text/html' });
  //       res.write('Something is Wrong');
  //       res.end();
  //     } else {
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.write('File Write Successfully...');
  //       res.end();
  //     }
  //   });
  // }
  // :::::: 2. writeFileSync() ::::::
  // if (req.url === '/') {
  //   let error = fs.writeFileSync('demo.txt', 'Welcome, Node JS');

  //   if (error) {
  //     res.writeHead(400, { 'Context-Type': 'text/html' });
  //     res.write('Something is Wrong');
  //     res.end();
  //   } else {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write('File Write Successfully...');
  //     res.end();
  //   }
  // }
  // // :::::: 3. rename() ::::::
  // if (req.url === '/') {
  //   fs.rename('demo.txt', 'demo.md', (error) => {
  //     if (error) {
  //       res.writeHead(400, { 'Content-Type': 'text/html' });
  //       res.write('File Rename Fail');
  //       res.end();
  //     } else {
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.write('File Rename Success...');
  //       res.end();
  //     }
  //   });
  // }

  // :::::: 3. renameSync() ::::::
  // if (req.url === '/') {
  //   let error = fs.renameSync('demo.md', 'demo.txt');

  //   if (error) {
  //     res.writeHead(400, { 'Content-Type': 'text/html' });
  //     res.write('File Rename Fail');
  //     res.end();
  //   } else {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write('File Rename Success...');
  //     res.end();
  //   }
  // }

  // :::::: 4. unlink() ::::::
  // if (req.url === '/') {
  //   fs.unlink('demo.txt', (error) => {
  //     if (error) {
  //       res.writeHead(400, { 'Content-Type': 'text/html' });
  //       res.write('File Delete Fail');
  //       res.end();
  //     } else {
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.write('File Delete Success...');
  //       res.end();
  //     }
  //   });
  // }

  // :::::: 4. unlinkSync() ::::::
  // if (req.url === '/') {
  //   let error = fs.unlinkSync('test.txt');
  //   if (error) {
  //     res.writeHead(400, { 'Content-Type': 'text/html' });
  //     res.write('File Delete Fail');
  //     res.end();
  //   } else {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write('File Delete Success...');
  //     res.end();
  //   }
  // }

  // :::::: 5. exists() ::::::
  if (req.url === '/') {
    fs.exists('test.txt', (result) => {
      if (result) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('True');
        res.end();
      } else {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.write('False');
        res.end();
      }
    });
  }

  // :::::: 5. existsSync() ::::::
  // if (req.url === '/') {
  //   let result = fs.existsSync('test.txt');
  //   if (result) {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write('True');
  //     res.end();
  //   } else {
  //     res.writeHead(400, { 'Content-Type': 'text/html' });
  //     res.write('False');
  //     res.end();
  //   }
  // }
});

server.listen(port, () => {
  console.log(`Server is Running -> ${port}`);
});
