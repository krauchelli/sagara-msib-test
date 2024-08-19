const express = require('express');
const router = express.Router();
const clothesController = require('../controllers/clothes.controllers');

// GET routes
router.get('/', clothesController.getAll);
router.get('/:id', clothesController.getOne);

// POST routes
router.post('/', clothesController.create);

// PUT routes
router.put('/:id', clothesController.update);

// DELETE routes
router.delete('/:id', clothesController.delete);