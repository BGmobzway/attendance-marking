const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // Token expires in 1 hour
    );
};

const middleware = (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]

        if(!token) {
            return res.status(401).json({ message: `Authorization token is missing`})
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken)=>{
            if (err){
                return res.status(401).json({ message: `Invalid token`})
            }
            req.user = decodedToken
            next()
        })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}
module.exports = { generateToken, middleware }