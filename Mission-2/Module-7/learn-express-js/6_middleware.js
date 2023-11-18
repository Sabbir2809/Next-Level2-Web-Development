// Dependencies
const express = require('express');
// app is an instance of express
const app = express();

// 1. Application level middleware:
app.use((req, res, next) => {
  console.log(`This is middleware`);
  next();
});

app.get('/', (req, res) => {
  res.send('This is Home Page');
});

// 2. routing level middleware:
app.use('/about', (req, res, next) => {
  console.log(`This is middleware`);
  next();
});

app.get('/about', (req, res) => {
  res.send('This is About Page');
});

app.get('/contact', (req, res) => {
  res.send('This is Contact Page');
});

app.listen(3000, () => {
  console.log(`Listening on port http://localhost:3000`);
});
