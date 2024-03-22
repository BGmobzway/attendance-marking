const bcrypt = require('bcryptjs')

const hashPassword = async function(next){
    try {
        if(!this.isModified('password')){
            return next()
        }
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error)
    }
}
module.exports = {hashPassword}