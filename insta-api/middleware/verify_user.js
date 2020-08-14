const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
const { protected } = require("../controllers/auth")
dotenv.config()

let middlewares = {}

middlewares.verifyUser = (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.status(401).json({ error: true, message: "You need to login" })
        }

        try {
            jwt.verify(token, process.env.SUPER_SECRET_KEY, function (error, decoded) {
                if (error) {
                    return res.status(401).json({ error: true, message: "invalid token" })
                }
                next()
            });
        } catch (error) {
            return res.status(500).json({ error: true, message: error.message })
        }


    } catch (error) {
        return res.status(500).json({ error: true, message: error.message })
    }
}

module.exports = middlewares