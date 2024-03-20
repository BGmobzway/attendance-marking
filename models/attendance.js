const {Schema, Types, model, default: mongoose } = require('mongoose')
const attendanceSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent'], required: true }
});

module.exports = model('Attendance', attendanceSchema)