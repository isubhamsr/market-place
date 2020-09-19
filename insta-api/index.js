const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const keys = require("./config/keys")
dotenv.config()
app.use(cors())

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(keys.MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{console.log("db Connected")})
mongoose.connection.on('error',(err)=>{console.log("sho some error", err)})


// express json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// register the model schema
require("./model/userModel")
require("./model/postModel")

// import routes
const apiRoute = require("./routes/api")

// api route
app.use(process.env.APP_VERSION, apiRoute)


app.listen(process.env.HTTP_PORT, ()=> console.log(`server running on ${process.env.HTTP_PORT}`))