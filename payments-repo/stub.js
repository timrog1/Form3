// stub endpoint to simulate real one

const express = require('express')
const stubData = require('./stub-data.json');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.get('/payments', function (req, res) {
  res.send(JSON.stringify(stubData));
})

app.get('/payments/:id', function (req, res) {
  var payment = stubData.data.filter(p => p.id === req.params.id)[0];
  res.send(JSON.stringify(payment));
})

app.listen(8888);