const express = require('express');
const router = express.Router();

const { readJson, writeJson } = require('./utils');

const validateTeam = require('./validateTeam');

router.post('/', validateTeam, async (req, res) => {
  const newTeam = {
    ...req.body,
    initials: req.body.initials.toUpperCase(),
  };
  const team = await writeJson('./teams.json', newTeam);

  res.status(200).json(team);
});

router.get('/', async (req, res) => {
  const teams = await readJson('./teams.json') || [];

  res.status(200).json({ teams });
});

module.exports = router;
