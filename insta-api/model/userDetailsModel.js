const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const userDetailsSchema = new mongoose.Schema({
    profile_photo : {
        type : String,
        default : ""
    },
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
    posted_by : {
        type : ObjectId,
        ref : "User"
    }
})

mongoose.model("UserDetails", userDetailsSchema)