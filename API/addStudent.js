const Student = require('../models/student')

exports.addStudent = async (req,res) => {
    try {
        const { name, classname, rollNo } = req.body
        const newStudent = new Student({ name, classname, rollNo });
        await newStudent.save();
        res.status(201).json({ message: "Student added successfully", student: newStudent })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add student", error: error.message })
    }
}