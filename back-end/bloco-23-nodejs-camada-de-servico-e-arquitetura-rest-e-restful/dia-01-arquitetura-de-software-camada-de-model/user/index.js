const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
