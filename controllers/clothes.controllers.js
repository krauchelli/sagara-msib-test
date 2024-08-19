const clothesService = require('../services/clothes.services');

exports.getAll = async (req, res) => {
    try {
        const { color, size, quantity, lessThanFive } = req.query;
        const clothes = await clothesService.getAll({ color, size, quantity, lessThanFive });
        res.json(clothes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const clothes = await clothesService.getOne(id);
        res.json(clothes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const { name, color, size, price, quantity } = req.body;
        const newClothes = await clothesService.create({ name, color, size, price, quantity });
        res.status(201).json(newClothes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedClothes = await clothesService.update(id, req.body);
        res.json(updatedClothes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await clothesService.delete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addStock = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedClothes = await clothesService.addStock(id);
        res.json(updatedClothes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.reduceStock = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedClothes = await clothesService.reduceStock(id);
        res.json(updatedClothes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};