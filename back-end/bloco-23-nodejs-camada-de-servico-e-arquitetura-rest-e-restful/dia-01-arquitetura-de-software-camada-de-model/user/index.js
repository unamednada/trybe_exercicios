const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

const User = require('./models/User');

app.post('/user', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  if ([first_name, last_name, email, password].includes(undefined)) {
    return res.status(400).json({
      error: true,
      message: 'All fields are required',
    });
  }
  if (!User.validatePassword(password)) {
    return res.status(400).json({
      error: true,
      message: 'Password must have at least 6 characters',
    });
  }
  const returnUser = await User.create(first_name, last_name, email, password);
  return res.status(201).json(returnUser);
});

app.get('/user', async (req, res) => {
  const users = await User.getAll() || [];
  return res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(+id);
  if (!user) {
    return res.status(404).json({
      error: true,
      message: 'User not found',
    });
  }
  res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const newUser = req.body;

  if ([first_name, last_name, email, password].includes(undefined)) {
    return res.status(400).json({
      error: true,
      message: 'All fields are required',
    });
  }
  if (!User.validatePassword(password)) {
    return res.status(400).json({
      error: true,
      message: 'Password must have at least 6 characters',
    });
  }

  // CONTINUE FROM HERE, UPDATE USER

})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
