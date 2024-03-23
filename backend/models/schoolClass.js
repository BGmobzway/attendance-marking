const { Schema, model } = require('mongoose');

const classSchema = new Schema({
    className: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }], // Array of student references
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }]  // Array of subject references
});

module.exports = model('Class', classSchema);