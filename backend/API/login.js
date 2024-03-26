const Teacher = require('../models/teachers')
const bcrypt = require('bcryptjs')
const authorisations = require('../middleware/jwt')
const Subject = require('../models/subjects')



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Teacher.findOne({ email })
        if (user) {
            const isPasswordValid = bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                const token = authorisations.generateToken(user);
                return res.status(200).json({ message: 'Login successful', user:user, token:token });
            }
        }else {
            res.status(401).json({ message: 'Invalid credentials' });
        }

    } catch (error) {
        res.status(500).json({ message: "Failed to login", error: error.message })
    }


}
exports.signup = async (req, res) => {
    try {
        let { name, email, password, subjects } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new teacher
        const newTeacher = new Teacher({ name, email, password: hashedPassword });
        await newTeacher.save();

        // Save the subjects taught by the teacher
        // if (subjects && subjects.length > 0) {
        //     const subjectIds = await Promise.all(subjects.map(async (subjectName) => {
        //         const newSubject = new Subject({ subjectname: subjectName, teacher: newTeacher._id });
        //         await newSubject.save();
        //         return newSubject._id;
        //     }));
        //     newTeacher.subjects = subjectIds;
        //     await newTeacher.save();
        // }

        const token = authorisations.generateToken(newTeacher);

        res.send({ message: "New Teacher created successfully", teacher: newTeacher, token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create teacher", error: error.message });
    }
}
exports.getTeachers = async(req, res) => {
    try {
        const allTeachers = await Teacher.find({})
        return res.status(200).json({message: "All teachers information", teachers: allTeachers})
    } catch (error) {
        res.send(error)
    }
}
