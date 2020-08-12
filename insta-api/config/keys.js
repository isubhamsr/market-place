const dotenv = require("dotenv")
dotenv.config()

let keys = {
    MONGOURI : process.env.MONGOURI
}

module.exports = keys