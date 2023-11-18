// Dependencies
const express = require('express');
const multer = require('multer');

// app is an instance of express
const app = express();

// create storage
let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './assets/uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

let upload = multer({ storage: storage }).single('myfile');

app.post('/', (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      res.send('Error Uploading File');
    } else {
      res.send('File Upload Successfully');
    }
  });
});

// PORT
app.listen(3000, () => {
  console.log(`Listening on port http://localhost:3000`);
});
