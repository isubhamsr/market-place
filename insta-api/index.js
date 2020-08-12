const express = require('express')
const app = express()
const dotenv = require("dotenv")

dotenv.config()

app.get("/", (req,res)=>{
    res.send("hello")
})

app.listen(process.env.HTTP_PORT, ()=> console.log(`server running on ${process.env.HTTP_PORT}`))