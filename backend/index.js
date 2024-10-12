// index.js hopefully base code
const express = require('express');
const app = express();
const port = 3000;

const parseReceipt = require('./parseReceipt');

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.use('/parse', (req, res) => {
    parseReceipt();
    res.send("trying to parse");
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

