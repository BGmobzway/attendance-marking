const Teacher = require('../models/teachers')



exports.login = async (req, res) => {
    try {
        const teacher = await Teacher.findOne({ email: req.body.email, password: req.body.password })
        if (teacher) {
            res.status(200).json({ message: 'Login successful', teacher });
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
        let newTeacher = new teacher({
            name: name,
            email: email,
            password: password
        })


        await newTeacher.save();

        res.send({ message: "New Teacher created successfully" })
    } catch (error) {
        res.send(error)
    }
}
