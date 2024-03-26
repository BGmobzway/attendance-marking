const Student = require('../models/student')

const classSchema = require('../models/schoolClass');

exports.addStudent = async (req, res) => {
    try {
        const { name, classname, rollNo } = req.body;
        const newStudent = new Student({ name, classname, rollNo });
        const student = await newStudent.save();

        // Update the corresponding class with the new student
        await classSchema.findOneAndUpdate(
            { className: classname },
            { $push: { students: student._id } },
            { new: true }
        );

        res.status(201).json({ message: "Student added successfully", student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add student", error: error.message });
    }
};
exports.getStudent = async (req,res) => {
    try {
        const students = await Student.find({ classname: req.params.classId });
        res.status(200).json({ students: students });
      } catch (error) {
        res.status(500).json({ message: "Failed to fetch students", error: error.message });
      }
}