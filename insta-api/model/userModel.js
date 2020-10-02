const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    profile_photo : {
        type : String,
        default : ""
    },
    followers:[{type: ObjectId, ref: "User"}],
    followings:[{type: ObjectId, ref: "User"}],
})

mongoose.model("User", userSchema)