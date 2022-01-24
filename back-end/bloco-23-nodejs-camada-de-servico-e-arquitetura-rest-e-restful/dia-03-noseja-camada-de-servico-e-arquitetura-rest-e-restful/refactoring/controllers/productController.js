const express = require('express');
const Joi = require('joi');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(404).json({
    error: {
      message: 'Not found',
    },
  });

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  const { error: joiErr } = Joi.object({
    name: Joi.string().not().empty().required(),
    brand: Joi.string().not().empty().required(),
  }).validate({ name, brand });

  if (joiErr) return res.status(400).json({ error: {
    message: joiErr.details[0].message,
  }});

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (!products) return res.status(400).json({
    error: {
      message: 'Can\'t delete nonexistent id',
    },
  });

  res.status(204).end();
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const { error: joiErr } = Joi.object({
    name: Joi.string().not().empty().required(),
    brand: Joi.string().not().empty().required(),
  }).validate({ name, brand });

  if (joiErr) return res.status(400).json({ error: {
    message: joiErr.details[0].message,
  }});

  const products = await ProductModel.update(req.params.id, name, brand);

  if (!products) return res.status(400).json({ error: {
    message: 'Can\'t update nonexistent id'
  }})

  res.status(200).json(products);
});

module.exports = router;
