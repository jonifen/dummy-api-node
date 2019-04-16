const express = require('express');
const app = express();
const port = 6000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/dummy', (req, res) => {
  console.log("Body:", req.body);
  res.status(201);
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});