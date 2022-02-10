require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (_req, res) => res.send(`It's ALIVE!!!`));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
