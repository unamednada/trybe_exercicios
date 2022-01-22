require('dotenv').config();

const express = require('express');

const app = express();
const { PORT } = process.env;
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/error');

app.use(bodyParser.json());

const pingController = require('./controllers/Ping');
const cepController = require('./controllers/Cep');

app.use('/ping', pingController);
app.use('/cep', cepController);

app.use(errorMiddleware);

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });
