const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema({
    src: { type: String, required: true }
});

module.exports = mongoose.model("Header", headerSchema);
