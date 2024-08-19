const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET all clothes
exports.getAll = async (req, res) => {
    try {} catch (error) {}
};

// GET one clothes
exports.getOne = async (req, res) => {
    try {} catch (error) {}
};

// POST a new clothes
exports.create = async (req, res) => {
    const { name, color, size, price, quantity } = req.body;

};

// PUT updated data
exports.update = async (req, res) => {
    try {} catch (error) {}
};

// DELETE data
exports.delete = async (req, res) => {
    try {} catch (error) {}
};