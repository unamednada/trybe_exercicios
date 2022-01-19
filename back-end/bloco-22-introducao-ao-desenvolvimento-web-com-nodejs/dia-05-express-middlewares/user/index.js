const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./userRouter');
const PORT = 3001;


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRouter);

app.listen(PORT, () => { console.log('App listening on PORT 3001'); });
