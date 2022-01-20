const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');
const fetchPrice = require('./fetchPrice');

const authToken = require('./authToken');
router.use(authToken);

router.get('/price', rescue(async (req, res) => {
  const rate = await fetchPrice();
  res.json({ price: rate });
}));

module.exports = router;
