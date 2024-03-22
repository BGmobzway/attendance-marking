const jwt = require('jsonwebtoken')

const middleware = (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]

        if(token) {
            
        }
    } catch (error) {
        
    }
}