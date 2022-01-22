const express = require('express');
const router = express.Router();

const Ping = require('../services/Ping');

router.get('/', (_req, res) => res.status(200).json({ message: 'pong' }));

module.exports = router;
