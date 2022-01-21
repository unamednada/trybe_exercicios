const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRouter = require('./postRouter');
const errors = require('./routerNotFound');
const { use } = require('./postRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postRouter);

app.use('*', (req, res, next) => next({ statusCode: 404, message: 'Ooops, router not found' }));
app.use(errors.routerNotFound);

app.listen(3001, () => { console.log('App listening on PORT 3001'); });
