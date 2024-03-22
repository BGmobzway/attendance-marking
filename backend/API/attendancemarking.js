const Attendance = require('../models/attendance')

exports.attendancemarking = async (req, res) => {
    try {
        const { studentId, subjectId, date, status } = req.body;
        const newAttendance = new Attendance({ student: studentId, subject: subjectId, date, status });
        await newAttendance.save()
        res.status(201).json({ message: "Attendance marked successfully", attendance: newAttendance })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to mark attendance", error: error.message })
    }
}