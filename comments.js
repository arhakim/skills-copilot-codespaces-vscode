// create web server
const express = require('express');
const app = express();

// create route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// create route with parameter
app.get('/comments/:id', (req, res) => {
  res.send('Comment ID: ' + req.params.id);
});

// create route with query parameter
app.get('/comments', (req, res) => {
  res.send('Comment ID: ' + req.query.id);
});

// start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});