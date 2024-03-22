const {Schema, Types, model, default: mongoose } = require('mongoose')
const teacherSchema = new Schema({
name: {
    type: String,
        required: true
},
email: {
    type: String,
        required: true
},
password: {
    type: String,
        required: true
},
subName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
    
}
})
module.exports = model('Teacher', teacherSchema)

