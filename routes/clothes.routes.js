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
router.put('/:id/add-stock', clothesController.addStock);
router.put('/:id/reduce-stock', clothesController.reduceStock);

// DELETE routes
router.delete('/:id', clothesController.delete);

module.exports = router;