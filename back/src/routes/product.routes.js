const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");



router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
