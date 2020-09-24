const mongoose = require("mongoose")
const User = mongoose.model("User")
const Post = mongoose.model("Post")

let users = {}

users.otherUserProfile = (req, res) => {
    try {
        User.findOne({ username: req.params.username })
            .select("-password")
            .then(user => {
                // console.log(user);
                Post.find({ posted_by: user._id })
                    .populate("posted_by comments.posted_by", "_id username name")
                    .exec((err, posts) => {
                        if (err) {
                            return res.status(422).json({ error: err })
                        }
                        posts.reverse()
                        res.status(200).json({
                            error: false,
                            message: "User Fetched",
                            user: user,
                            posts: posts
                        })
                    })
            }).catch(err => {
                console.log(err.message);
                return res.status(404).json({ error: true, message: "User not found" })
            })
    } catch (error) {
        res.status(500).json({
            err: true,
            message: err.message
        })
    }
}

module.exports = users;