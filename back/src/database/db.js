const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://ferid:ferid@cluster0.d0lsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        });
        console.log("MongoDB bağlantısı uğurlu!");
    } catch (error) {
        console.error("MongoDB bağlantısında xəta:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
