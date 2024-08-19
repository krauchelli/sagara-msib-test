const clothesQueries = require('../queries/clothes.queries');

exports.getAll = async () => {
    return await clothesQueries.getAll();
};

exports.getOne = async (id) => {
    return await clothesQueries.getOne(id);
};

exports.create = async (clothesData) => {
    return await clothesQueries.create(clothesData);
};

exports.update = async (id, clothesData) => {
    return await clothesQueries.update(id, clothesData);
};

exports.delete = async (id) => {
    return await clothesQueries.delete(id);
};