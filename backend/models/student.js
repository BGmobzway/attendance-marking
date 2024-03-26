const {Schema, Types, model, default: mongoose } = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    classname: { type: String, required: true },
    rollNo: { type: Number, required: true, unique: true },
    // attendance: [{
    //     date: {
    //         type: Date,
    //         required: true
    //     },
    //     status: {
    //         type: String,
    //         enum: ['Present', 'Absent'],
    //         required: true
    //     },
    //     subName: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Subject',
    //         required: true
    //     }
    // }]
})
module.exports = model('Student', studentSchema)