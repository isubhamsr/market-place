const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const { protected } = require("../controllers/auth")
const User = mongoose.model("User")
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

                // console.log(decoded);
                req.user = decoded
                next()
                // User.findById(user_id)
                // .then((user)=>{
                //     // delete user.password
                //     console.log(user);
                //     req.user = user
                //     next()
                // })
            });
        } catch (error) {
            return res.status(500).json({ error: true, message: error.message })
        }


    } catch (error) {
        return res.status(500).json({ error: true, message: error.message })
    }
}

module.exports = middlewares