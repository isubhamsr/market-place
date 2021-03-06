const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const userDetailsSchema = new mongoose.Schema({
    bio : {
        type : String,
        default : ""
    },
    business_type : {
        type : String,
        default : ""
    },
    address : {
        type : String,
        default : ""
    },
    phone_number : {
        type : String,
        default : ""
    },
    website : {
        type : String,
        default : ""
    },
    gender : {
        type : String,
        default : ""
    },
    posted_by : {
        type : ObjectId,
        ref : "User"
    }
})

mongoose.model("UserDetails", userDetailsSchema)