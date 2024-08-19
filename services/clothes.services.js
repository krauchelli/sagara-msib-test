const clothesQueries = require('../queries/clothes.queries');

exports.getAll = async (filters) => {
    try {
        const allClothes = await clothesQueries.getAll();
        let filteredClothes = allClothes;
        // filters
        filteredClothes = filters.color ? filteredClothes.filter(clothes => clothes.color === filters.color) : filteredClothes;
        filteredClothes = filters.size ? filteredClothes.filter(clothes => clothes.size === filters.size) : filteredClothes;
        filteredClothes = filters.quantity ? filteredClothes.filter(clothes => clothes.quantity === parseInt(filters.quantity)) : filteredClothes;
        // lessThanFive is a boolean
        filteredClothes = filters.lessThanFive ? filteredClothes.filter(clothes => clothes.quantity < 5) : filteredClothes;
        
        return filteredClothes;
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

exports.addStock = async (id) => {
    try {
        const clothes = await clothesQueries.getOne(id);
        if (!clothes) {
            throw new Error(`Clothes with id ${id} not found`);
        }
        
        clothes.quantity++;
        return await clothesQueries.update(id, clothes);
    } catch (error) {
        throw new Error(`Terjadi Kesalahan Service: ${error.message}`);
    }
};

exports.reduceStock = async (id) => {
    try {
        const clothes = await clothesQueries.getOne(id);
        if (!clothes) {
            throw new Error(`Clothes with id ${id} not found`);
        }
        
        if (clothes.quantity <= 0) {
            throw new Error('Insufficient stock');
        }

        clothes.quantity--;
        return await clothesQueries.update(id, clothes);
    } catch (error) {
        throw new Error(`Terjadi Kesalahan Service: ${error.message}`);
    }
};