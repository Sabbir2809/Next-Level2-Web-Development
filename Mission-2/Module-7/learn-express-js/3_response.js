// Dependencies
const express = require('express');
// app is an instance of express
const app = express();
const port = 3000;

/*
Browser Response:
  1. Body
  2. Headers
  3. Status
  4. Cookies
*/

// requests to the root URL (/) or route
app.get('/', (req, res) => {
  res.send('Hello Express JS');
});

// 1. String response:
app.get('/one', (req, res) => {
  // res.send() -> response body
  res.send('This is simple string response send()');
});

app.get('/two', (req, res) => {
  // res.end() -> response ending point denoted
  res.end('This is simple string response end()');
});

// 2. status Code with String response:
app.post('/three', (req, res) => {
  res.status(201).send('Create Post');
  // res.send('Successfully Post...');
});

// 3. json response:
app.get('/four', (req, res) => {
  const data = [
    {
      name: 'Node.js',
      work: 'JavaScript Runtime',
    },
    {
      name: 'express',
      work: 'Node.js framework',
    },
    {
      name: 'React.js',
      work: 'JavaScript UI Library',
    },
    {
      name: 'MongoDB',
      work: 'Database',
    },
  ];

  res.json(data);
});

// 4. download response:
app.get('/download', (req, res) => {
  res.download('./assets/express.png');
});

// 4. redirect response:
app.get('/cse', (req, res) => {
  res.redirect('http://localhost:3000/diu');
});

app.get('/diu', (req, res) => {
  res.send('Daffodil International University');
});

// 5. headers response:
app.get('/five', (req, res) => {
  res.append('Name', 'Sabbir Hossain');
  res.append('profession', 'Web Developer');

  res.status(201).send('This is a headers response');
});

// 6. set cookie
app.post('/six', (req, res) => {
  res.cookie('name', 'Sabbir Hossain');
  res.cookie('age', 24);
  res.send('Cookie Set Successfully.');
});

// 6. clear cookie
app.post('/seven', (req, res) => {
  res.clearCookie('name', 'Sabbir Hossain');
  res.send('Cookie Set Successfully.');
});

// PORT
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
