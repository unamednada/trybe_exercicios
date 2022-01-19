const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const simpsons = require('./simpsons.json');

app.get('/simpsons', (req, res) => {
  res.json(simpsons);
});

app.listen(3001, () => {
  console.log('App listening on PORT 3001');
});