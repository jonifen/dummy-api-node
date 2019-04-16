const express = require('express');
const app = express();
const port = 5002;

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/dummy', (req, res) => {
  console.log("Body:", req.body);
  res.status(201);
  res.send();
});

app.get('/dummy', (req, res) => {
  var payload = {
    "status": "success"
  };
  res.status(200);
  res.send(payload);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});