const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const pong = { message: 'pong '};

app.get('/ping', (req, res) => res.json(pong));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  const hello = { message: `Hello, ${name}` };
  res.json(hello);
});

app.listen(3001, () => {
  console.log('App listening on PORT 3001');
});