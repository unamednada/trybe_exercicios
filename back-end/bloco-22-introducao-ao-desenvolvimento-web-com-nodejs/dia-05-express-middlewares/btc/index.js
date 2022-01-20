const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const btcRouter = require('./btcRouter');

app.use('/btc', btcRouter);

app.listen(3001, () => { console.log('App listening on PORT 3001'); });
