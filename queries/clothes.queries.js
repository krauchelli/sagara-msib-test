const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async () => {
    return await prisma.clothes.findMany();
};

exports.getOne = async (id) => {
    return await prisma.clothes.findUnique({ where: { id: parseInt(id) } });
};

exports.create = async (clothesData) => {
    return await prisma.clothes.create({ data: clothesData });
};

exports.update = async (id, clothesData) => {
    return await prisma.clothes.update({
        where: { id: parseInt(id) },
        data: clothesData,
    });
};

exports.delete = async (id) => {
    return await prisma.clothes.delete({ where: { id: parseInt(id) } });
};