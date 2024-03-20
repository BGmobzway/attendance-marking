const {Schema, Types, model, default: mongoose } = require('mongoose')
const subjectSchema = new Schema({
    subjectname: { type: String, required: true },
    classname: { type: String, required: true },
    teacher: { type: String, required: true },
});

module.exports = model('Subject', subjectSchema);