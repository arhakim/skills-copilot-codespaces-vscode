// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});