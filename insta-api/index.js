const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')
const bodyParser = require('body-parser');
dotenv.config()
app.use(cors())

// express json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import routes
const apiRoute = require("./routes/api")

// set routes

// api route
app.use(process.env.APP_VERSION, apiRoute)


app.listen(process.env.HTTP_PORT, ()=> console.log(`server running on ${process.env.HTTP_PORT}`))