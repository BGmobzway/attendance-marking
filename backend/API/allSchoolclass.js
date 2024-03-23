const classSchema = require('../models/schoolClass')
// addClass.js



exports.addClass = async (req, res) => {
    try {
        const { className } = req.body;
        const newClass = new classSchema({ className });
        await newClass.save();
        res.status(201).json({ message: "Class added successfully", class: newClass });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add class", error: error.message });
    }
};

