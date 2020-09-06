const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
dotenv.config()
const User = mongoose.model("User")

let auth = {}

auth.signup = (req, res) => {
    try {
        const { name, username, email, password } = req.body
        if (!name || !username || !email || !password) {
            return res.status(422).json({ error: true, message: "All Fields are require" })
        }
        
        User.findOne({ email: email })
            .then((emailId) => {
                if (emailId) {
                    return res.status(422).json({ error: true, message: "This email is allready taken" })
                }
                User.findOne({ username: username })
                    .then((userName) => {
                        if (userName) {
                            return res.status(422).json({ error: true, message: "This Username is allready taken" })
                        }

                        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_Rounds));
                        const hash = bcrypt.hashSync(password, salt);
                        const user = new User({
                            name : name,
                            username : username,
                            email : email,
                            password : hash
                        })

                        user.save()
                            .then((user) => {
                                const token = jwt.sign({ 
                                    user_id : user._id,
                                    user_name : user.name,
                                    user_username : user.username,
                                    user_email : user.email
                                 }, process.env.SUPER_SECRET_KEY);
                                return res.status(200).json({ error: false, message: "Signup Success", token: token })
                            })
                            .catch((error) => {
                                return res.status(422).json({ error: true, message: "Internal Server Error, Please Try Again" })
                            })
                    })
                    .catch((error) => {
                        res.status(500).json({ error: true, message: "Internal Server Error, Please Try Again" })
                    })
            })
            .catch((error) => {
                res.status(500).json({ error: true, message: "Internal Server Error, Please Try Again" })
            })

    } catch (error) {
        res.status(500).json({
            err: true,
            message: "Internal Server Error, Please Try Again"
        })
    }
}

auth.signin = (req, res) => {
    try {
        const { username, password } = req.body

        if(!username, !password){
            return res.status(422).json({ error: true, message: "All Fields are require" })
        }

        User.findOne({username:username})
        .then((user)=>{
            // console.log(user);
            // console.log(Object.keys(user).length);
            if(user === null){
                return res.status(422).json({error: true, message:"No User Found Please Sign Up or Wrong Username"})
            }
            const isPassword = bcrypt.compareSync(password, user.password); 
            if(isPassword){
                const token = jwt.sign({ 
                    user_id : user._id,
                    user_name : user.name,
                    user_username : user.username,
                    user_email : user.email
                 }, process.env.SUPER_SECRET_KEY);
                return res.status(200).json({error : false, message: "Signin Success", token: token})
            }else{
                return res.status(422).json({error: true, message:"Wrong Password"})
            }
            
        })
        .catch((error)=>{
            return res.status(422).json({error: true, message:"Internal Server Error, Please Try Again"})
        })
    } catch (error) {
        res.status(500).json({
            err: true,
            message: "Internal Server Error, Please Try Again"
        })
    }

}

auth.protected = (req,res) =>{
    res.send("protected")
}

module.exports = auth;