const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const simpsons = require('./simpsons.json');

app.get('/simpsons', (req, res) => {
  res.json(simpsons);
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const simpson = simpsons.find(simpson => simpson.id === id);
  if (!simpson) return res.status(404).json({ message: 'simpson not found' });
  res.json(simpson);
});

app.listen(3001, () => {
  console.log('App listening on PORT 3001');
});