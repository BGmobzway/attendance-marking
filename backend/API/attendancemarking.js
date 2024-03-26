const Attendance = require('../models/attendance')
const Student = require('../models/student')

exports.markAttendance = async (req, res) => {
   
    try {
        const { studentId, date, status } = req.body;

        // Check if the attendance record already exists for the student and date
        let attendance = await Attendance.findOne({ student: studentId, date });
        if (attendance) {
            // If attendance record exists, update the status
            attendance.status = status;
        } else {
            // If attendance record does not exist, create a new one
            attendance = new Attendance({ student: studentId, date, status });
        }

        // Save the attendance record
        await attendance.save();

        return res.status(201).json({ message: "Attendance marked successfully", attendance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to mark attendance", error: error.message });
    } 
}
    // try {
    //     const { studentId, date, status } = req.body;
        
    //     // Check if the student exists
    //     const student = await Student.findById(studentId);
    //     if (!student) {
    //         return res.status(404).json({ message: "Student not found" });
    //     }

    //     // Check if the attendance record already exists for the student and date
    //     let attendance = await Attendance.findOne({ student: studentId, date });
    //     if (attendance) {
    //         // If attendance record exists, update the status
    //         attendance.status = status;
    //     } else {
    //         // If attendance record does not exist, create a new one
    //         attendance = new Attendance({ student: studentId, date, status });
    //     }

    //     // Save the attendance record
    //     await attendance.save();

    //     return res.status(201).json({ message: "Attendance marked successfully", attendance });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: "Failed to mark attendance", error: error.message });
    // } 



 // try {
    //     const { studentId, date, status } = req.body;
        
    //     // Check if the student exists
    //     const student = await Student.findById(studentId);
    //     if (!student) {
    //         return res.status(404).json({ message: "Student not found" });
    //     }

    //     // Check if the student already has attendance record for the given date
    //     const existingAttendance = student.Attendance.find(att => att.date.toDateString() === new Date(date).toDateString());

    //     if (existingAttendance) {
    //         // If attendance record exists for the date, update the status
    //         existingAttendance.status = status;
    //         await student.save();
    //         return res.status(200).json({ message: "Attendance updated successfully", Attendance: existingAttendance });
    //     } else {
    //         // If attendance record does not exist, create a new one
    //         student.Attendance.push({ date, status, subName });
    //         await student.save();
    //         return res.status(201).json({ message: "Attendance marked successfully", Attendance: student.Attendance });
    //     }
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: "Failed to mark attendance", error: error.message });
    // } 