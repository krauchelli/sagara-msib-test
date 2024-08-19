const clothesQueries = require('../queries/clothes.queries');

exports.getAll = async () => {
    try {
        return await clothesQueries.getAll();
    } catch (error) {
        throw new Error(`Terjadi Kesalahan Service: ${error.message}`);
    }
};

exports.getOne = async (id) => {
    try {
        const clothes = await clothesQueries.getOne(id);
        if (!clothes) {
            throw new Error(`Clothes with id ${id} not found`);
        }
        return clothes;
    } catch (error) {
        throw new Error(`Terjadi Kesalahan Service: ${error.message}`);
    }
};

exports.create = async (clothesData) => {
    try {
        // validation if bodies are empty or one of them is empty
        if (!clothesData.name || !clothesData.color || !clothesData.size || !clothesData.price || !clothesData.quantity) {
            throw new Error('All fields are required');
        }
        // validation if bodies are already exist
        const allClothes = await clothesQueries.getAll();
        const isExist = allClothes.find(clothes => clothes.name === clothesData.name);
        if (isExist) {
            throw new Error('Clothes already exist, please use another name');
        }
        
        return await clothesQueries.create(clothesData);
    } catch (error) {
        throw new Error(`Terjadi Kesalahan Service: ${error.message}`);
    }
};

exports.update = async (id, clothesData) => {
    try {
        // validation if id not found
        const clothes = await clothesQueries.getOne(id);
        if (!clothes) {
            throw new Error(`Clothes with id ${id} not found`);
        }
        // validation if bodies are already exist
        const allClothes = await clothesQueries.getAll();
        const isExist = allClothes.find(clothes => clothes.name === clothesData.name);
        if (isExist) {
            throw new Error('Clothes already exist, please use another name');
        }
        // validation if id is modified
        if (clothesData.id) {
            throw new Error('ID cannot be modified');
        }
        return await clothesQueries.update(id, clothesData);
    } catch (error) {
        throw new Error(`Terjadi Kesalahan Service: ${error.message}`);
    }
};

exports.delete = async (id) => {
    try {
        return await clothesQueries.delete(id);
    } catch (error) {
        throw new Error(`Terjadi Kesalahan Service: ${error.message}`);
    }
};