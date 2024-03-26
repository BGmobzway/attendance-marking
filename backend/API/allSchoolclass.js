const classSchema = require('../models/schoolClass')
// addClass.js



// addClass.js

const Subject = require('../models/subjects');


exports.addClass = async (req, res) => {
    try {
        const { className, subjects } = req.body;

        // Create a new class
        const newClass = new classSchema({ className });
        await newClass.save();

        // Update subjects to include the new class
        

        res.status(201).json({ message: "Class added successfully", class: newClass,  });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add class", error: error.message });
    }
};

exports.getClass = async (req, res) => {
    try {
        const allClasses = await classSchema.find({})

        res.status(201).json({ message: "all classes added", class: allClasses})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add class", error: error.message });
    }
}
