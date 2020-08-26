const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    // post_title : {
    //     type : String,
    //     required : true
    // },
    post_description : {
        type : String,
        required : true
    },
    post_image : {
        type : String,
        default : ""
    },
    posted_by : {
        type : ObjectId,
        ref : "User"
    }
})

mongoose.model("Post", postSchema)