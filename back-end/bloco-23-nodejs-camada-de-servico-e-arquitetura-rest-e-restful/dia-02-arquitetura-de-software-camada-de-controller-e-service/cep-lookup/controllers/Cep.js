const express = require('express');
const rescue = require('express-rescue');
const Joi = require('joi');

const router = express.Router();

const CEP = require('../services/Cep');
const { CEP_REGEX } = require('../models/Cep');

router.get('/:cep', rescue(async (req, res, next) => {
  const { cep } = req.params;
  
  const address = await CEP.findByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
}));

router.post('/', rescue(async (req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(CEP_REGEX).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if (error) return next(error);

  const newCep = await CEP.create(req.body);

  if (newCep.error) return next(newCep.error);

  res.status(201).json(newCep);
}));

module.exports = router;
