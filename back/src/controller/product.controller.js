const productService = require("../services/product.services");

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi" });
    }
};


const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product tapılmadı" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi" });
    }
};

const createProduct = async (req, res) => {
    try {
        const { src, discount, title, price1, price2, rating, comment } = req.body;
        if (!src || !discount || !title || !price1 || !price2 || !rating || !comment) {
            return res.status(400).json({ message: "Bütün sahələr doldurulmalıdır" });
        }

        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        if (!product) return res.status(404).json({ message: "Product tapılmadı" });

        res.json({ message: "Product silindi" });
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi" });
    }
};

module.exports = {getAllProducts, getProductById, createProduct, deleteProduct };
