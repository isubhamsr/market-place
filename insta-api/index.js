const express = require('express')
const app = express()
const PORT = 3001

app.get("/", (req,res)=>{
    res.send("hello")
})

app.listen(PORT, ()=> console.log("Running on ",PORT))