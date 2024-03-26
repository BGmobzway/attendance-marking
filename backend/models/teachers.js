const {Schema, Types, model, default: mongoose } = require('mongoose')
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4189991937.
const validator = require('validator')
const bcrypt = require('bcryptjs')
const {hashPassword} = require('../middleware/teacherAuthorisation')
const teacherSchema = new Schema({
name: {
    type: String,
        required: true
},
email: {
    type: String,
        required: [true, "Please enter your email"],
        unique: [true, "Email address already exist"],
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: "Please enter a valid email"
        }
},
        
password: {
    type: String,
        required: [true, "Please Enter Password"],
        validate: {
            validator: function (value){
                const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{8,}$/
                return passwordRegex.test(value)
                
            },
            
            message: "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
        }
}
           
// subName: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Subject'
    
// }
})
teacherSchema.pre("save", hashPassword)
module.exports = model('Teacher', teacherSchema)

