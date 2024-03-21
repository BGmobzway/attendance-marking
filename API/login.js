const teacher = require('../models/teacher')



exports.login = async (req, res) => {
    try {
        const user = await teacher.findOne({ email: req.body.email });
        if (user) {
            res.send({ message: 'login', user: user })
        }
        else {
            res.send({ message: 'signup' });
        }

    } catch (error) {
        res.send(error)
    }


}