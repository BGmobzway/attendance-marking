const Teacher = require('../models/teachers')
const authorisations = require('../middleware/jwt')



exports.login = async (req, res) => {
    try {
        const user = await Teacher.findOne({ email: req.body.email, password: req.body.password })
        if (user) {
            const token = authorisations.generateToken(user)
            
            res.status(200).json({ message: 'Login successful', user: user, token: token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }

    } catch (error) {
        res.status(500).json({ message: "Failed to login", error: error.message })
    }


}
exports.signup = async (req, res) => {
    try {

        let { name, email, password } = req.body;
        const newTeacher = new Teacher({
            name: name,
            email: email,
            password: password
        })


        await newTeacher.save();
        const token = authorisations.generateToken(newTeacher)

        res.send({ message: "New Teacher created successfully", teacher: newTeacher, token: token })
    } catch (error) {
        res.send(error)
    }
}
