const Header = require("../models/Header.js");

const getAllHeaders = async () => {
    return await Header.find();
};

const getHeaderById = async (id) => {
    return await Header.findById(id);
};

const createHeader = async (headerPath) => {
    const header = new Header({ src: headerPath });
    return await header.save();
};

const deleteHeader = async (id) => {
    return await Header.findByIdAndDelete(id);
};

module.exports = { getAllHeaders, getHeaderById, createHeader, deleteHeader };
