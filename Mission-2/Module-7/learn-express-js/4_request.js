// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
let multer = require('multer');

// app is an instance of express
const app = express();

// middleware
app.use(bodyParser.json());
app.use(multer().array());
app.use(express.static('public'));

// 1. get request:
app.get('/', (req, res) => {
  res.send('This is simple get() request');
});

// 2. get request with URL Query Params:
app.get('/about', (req, res) => {
  // URL Query Params
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;

  // headers
  const connection = req.header('Accept-Encoding');

  res.send(`${firstName} ${lastName} -> ${connection}`);
});

// 3. post request:
app.post('/post', (req, res) => {
  // URL Query Params
  const name = req.query.name;
  const age = req.query.age;

  // header
  const contentLength = req.header('Content-Length');

  // json
  const JSONData = req.body;
  // convert string
  const JSONString = JSON.stringify(JSONData);
  res.send(JSONString);

  res.send(`${name} -> ${age} -> ${contentLength}`);
  // res.end(`This is simple post() request`);
});

app.post('/profile', (req, res) => {
  let reqBody = req.body;
  res.send(JSON.stringify(reqBody));
});

// PORT
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
