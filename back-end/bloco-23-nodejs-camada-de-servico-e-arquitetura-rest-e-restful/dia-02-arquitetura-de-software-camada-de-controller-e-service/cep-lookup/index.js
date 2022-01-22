const express = require('express');

require('dotenv').config();

const app = express();
const { PORT } = process.env;

const pingController = require('./controllers/ping');
app.use('/ping', pingController);

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });
