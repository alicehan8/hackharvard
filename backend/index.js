// index.js hopefully base code
const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');

const parseReceipt = require('./parseReceipt');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.use('/parse', (req, res) => {
  console.log("parse in backend");
  parseReceipt(req);
  res.send("trying to parse");
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

