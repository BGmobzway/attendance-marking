const {Schema, Types, model, default: mongoose } = require('mongoose')
const attendanceSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent'], required: true }
});

module.exports = model('Attendance', attendanceSchema)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmMzYzU0MGU2MjY4ZGNmOGFkYjUzYiIsImVtYWlsIjoiYmhhdmVzaEBnbWFpbC5jb20iLCJpYXQiOjE3MTEwODc5NzksImV4cCI6MTcxMTA5MTU3OX0.W6hcy_U598cuXq0baqGacEqifIh-0aAjnb8g4UQCmIY