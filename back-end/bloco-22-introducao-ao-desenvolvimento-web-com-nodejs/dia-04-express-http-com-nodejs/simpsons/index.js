const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const app = express();
app.use(bodyParser.json());

let simpsons;
fs.readFile('./simpsons.json', 'utf-8')
  .then(simpsonsJson => {
    simpsons = JSON.parse(simpsonsJson);
  });

app.get('/simpsons', (req, res) => {
  res.json(simpsons);
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const simpson = simpsons.find(simpson => simpson.id === id);
  if (!simpson) return res.status(404).json({ message: 'simpson not found' });
  res.json(simpson);
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;
  const simpsonExists = simpsons.find(simpson => simpson.id === id);
  if (simpsonExists) return res.status(409).json({ message: 'id already exists' });
  simpsons.push({ id, name });
  fs.writeFile('./simpsons.json', JSON.stringify(simpsons))
    .then(() => {
      res.status(204).end();
    });
});

app.listen(3001, () => {
  console.log('App listening on PORT 3001');
});