const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const dotenv = require("dotenv")
dotenv.config()
const User = mongoose.model("User")

let auth = {}

auth.signup = (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(422).json({ error: true, msg: "All Fields are require" })
        }
        User.findOne({ email: email })
        .then((saveUser) => { 
            if(saveUser){
                return res.status(422).json({ error: true, msg: "This email is allready taken" })
            }
            const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_Rounds));
            const hash = bcrypt.hashSync(password, salt);
            const user = new User({
                name: name,
                email : email,
                password : hash
            })

            user.save()
            .then((user)=>{
                return res.status(200).json({ error: false, msg: "Signup Success", data: user })
            })
            .catch((error)=>{
                return res.status(422).json({ error: true, msg: error.message })
            })
        })
        .catch((error)=>{
            res.status(500).json({ error: true, msg: error.message })
        })

    } catch (error) {
        res.status(500).json({
            err: true,
            message: err.message
        })
    }
}

auth.signin = (req, res) => {
    try {
        res.json({ msg: "sign in route" })
    } catch (error) {
        res.status(500).json({
            err: true,
            message: err.message
        })
    }

}

module.exports = auth;