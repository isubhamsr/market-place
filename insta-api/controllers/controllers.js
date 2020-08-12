let controllers = {}

controllers.signup = (req, res) =>{
    res.json({msg: "sign up route"})
}

controllers.signin = (req, res) =>{
    res.json({msg: "sign in route"})
}

module.exports = controllers;