require('dotenv').config();
const { PORT } = process.env;

const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();
app.use(bodyParser.json());

app.post('/movies', MovieController.create);
app.get('/movies/:id', MovieController.findById);

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
