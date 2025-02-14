const express = require("express");
const router = express.Router();
const headerController = require("../controller/header.controller.js");

// Bütün header-ləri gətir
router.get("/", headerController.getAllHeaders);

// Tək header-i ID ilə gətir
router.get("/:id", headerController.getHeaderById);

// Yeni header əlavə et
router.post("/", headerController.uploadHeader);

// Header-i sil
router.delete("/:id", headerController.deleteHeader);

module.exports = router;
