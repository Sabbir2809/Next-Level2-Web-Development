// Dependencies
const express = require('express');
// app is an instance of express
const app = express();
const port = 3000;

/**
app.METHOD(PATH, HANDLER)
Where:
    - app is an instance of express.
    - METHOD is an HTTP request method, in lowercase.
    - PATH is a path on the server.
    - HANDLER is the function executed when the route is matched.
*/

// requests to the root URL (/) or route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Respond to POST request on the root route (/), the application’s home page:
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// Respond to a PUT request to the /user route:
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// Respond to a PUT request to the /user route:
app.patch('/user', (req, res) => {
  res.send('Got a PATCH request at /user');
});

// Respond to a DELETE request to the /user route:
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

// PORT
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
