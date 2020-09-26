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

users.follow = (req, res) => {
    try {
        const username = req.body.username
        const userId = req.user.user_id
        console.log(username);
        try {
            User.findOneAndUpdate({ username: username }, {
                $push: { followers: userId }
            }, {
                new: true
            })
                .select("-password")
                .exec((error, result) => {
                    if (error) {
                        return res.status(422).json({ error: true, message: error.message })
                    }
                    delete result.password
                    return res.status(200).json({ error: false, message: "Follow", data: result })
                })
        } catch (error) {
            return res.status(500).json({
                error: true,
                message: "Internal Server Error, Please Try Again"
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error, Please Try Again"
        })
    }
}

users.unfollow = (req, res) => {
    try {
        const username = req.body.username
        const userId = req.user.user_id
        console.log(username);
        try {
            User.findOneAndUpdate({ username: username }, {
                $pull: { followers: userId }
            }, {
                new: true
            })
                .select("-password")
                .exec((error, result) => {
                    if (error) {
                        return res.status(422).json({ error: true, message: error.message })
                    }
                    console.log(result.password);
                    delete result.password
                    return res.status(200).json({ error: false, message: "Follow", data: result })
                })
        } catch (error) {
            return res.status(500).json({
                error: true,
                message: "Internal Server Error, Please Try Again"
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error, Please Try Again"
        })
    }
}

users.fetchAllUser = (req, res) => {
    try {
        User.find()
            .select("-password")
            .then(users => {
                return resstatus(200).json({
                    error : false,
                    users: users
                })
            })
            .catch((error)=>{
                return res.status(500).json({
                    error: true,
                    message: error.message
                })
            })
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error, Please Try Again"
        })
    }
}

module.exports = users;