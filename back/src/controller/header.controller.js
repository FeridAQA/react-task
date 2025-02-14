const headerService = require("../services/header.services");

const getAllHeaders = async (req, res) => {
    try {
        const headers = await headerService.getAllHeaders();
        res.json(headers);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi" });
    }
};

const getHeaderById = async (req, res) => {
    try {
        const header = await headerService.getHeaderById(req.params.id);
        if (!header) return res.status(404).json({ message: "Header tapılmadı" });
        res.json(header);
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi" });
    }
};

const uploadHeader = async (req, res) => {
    try {
        const { src } = req.body;
        if (!src) {
            console.log("Header src göndərilməyib!");
            return res.status(400).json({ message: "Header src göndərilməyib" });
        }

        const header = await headerService.createHeader(src);
        console.log("Header yaradıldı:", header); // Yaradılan obyekti göstəririk

        res.status(201).json(header);
    } catch (error) {
        console.error("❌ Xəta baş verdi:", error); // Xətanı tam göstərin
        res.status(500).json({ message: "Xəta baş verdi", error: error.message });
    }
};
;

const deleteHeader = async (req, res) => {
    try {
        const header = await headerService.deleteHeader(req.params.id);
        if (!header) return res.status(404).json({ message: "Header tapılmadı" });

        res.json({ message: "Header silindi" });
    } catch (error) {
        res.status(500).json({ message: "Xəta baş verdi" });
    }
};

module.exports = { getAllHeaders, getHeaderById, uploadHeader, deleteHeader };
