const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const pong = { message: 'pong '};

app.get('/ping', (req, res) => res.status(200).json(pong));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  const hello = { message: `Hello, ${name}` };
  res.status(200).json(hello);
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  const greetings = parseInt(age) > 17 ? `Hello, ${name}` : 'Unauthorized';
  res.json({ message: greetings });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

app.listen(3001, () => {
  console.log('App listening on PORT 3001');
});