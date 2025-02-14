const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    src: { type: String, required: true },
    discount: { type: Number, required: true },
    title: { type: String, required: true },
    price1: { type: Number, required: true },
    price2: { type: Number, required: true },
    rating: { type: Number, required: true },
    comment: { type: Number, required: true } 
});

module.exports = mongoose.model("Product", productSchema);
