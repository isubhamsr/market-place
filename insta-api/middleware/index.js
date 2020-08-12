let middlewares = {}

middlewares.login = (req,res,next) =>{
    console.log("login middleware");
    next()
}

module.exports = middlewares