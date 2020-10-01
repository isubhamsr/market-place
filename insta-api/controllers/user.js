const mongoose = require("mongoose")
const User = mongoose.model("User")
const Post = mongoose.model("Post")
const UserDetails = mongoose.model("UserDetails")

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
                        // return res.status(200).json({
                        //     error: false,
                        //     message: "User Fetched",
                        //     user: user,
                        //     posts: posts
                        // })
                        UserDetails.find({ posted_by: user._id })
                            // .populate("posted_by comments.posted_by", "_id username name")
                            .exec((err, details) => {
                                if (err) {
                                    return res.status(422).json({ error: err })
                                }
                                return res.status(200).json({
                                    error: false,
                                    message: "User Fetched",
                                    user: user,
                                    details: details,
                                    posts: posts
                                })
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
                    User.findByIdAndUpdate(userId, {
                        $push: { followings: result._id }
                    }, {
                        new: true
                    })
                        .select("-password")
                        .exec((error, result) => {
                            if (error) {
                                return res.status(422).json({ error: true, message: error.message })
                            }
                            return res.status(200).json({ error: false, message: "Follow", data: result })
                        })
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
                    User.findByIdAndUpdate(userId, {
                        $pull: { followings: result._id }
                    }, {
                        new: true
                    })
                        .select("-password")
                        .exec((error, result) => {
                            if (error) {
                                return res.status(422).json({ error: true, message: error.message })
                            }
                            return res.status(200).json({ error: false, message: "Follow", data: result })
                        })
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
                return res.status(200).json({
                    error: false,
                    users: users
                })
            })
            .catch((error) => {
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

users.addUserDetails = (req, res) => {
    try {
        const userId = req.user.user_id
        const { profile_photo, bio, business_type, address, phone_number } = req.body
        try {
            const userDetails = new UserDetails({
                profile_photo: profile_photo,
                bio: bio,
                business_type: business_type,
                address: address,
                phone_number: phone_number,
                posted_by: userId
            })
            userDetails.save()
                .then((userDetails) => {
                    return res.status(200).json({ error: false, message: "User Details are adds Successfull", data: userDetails })
                })
                .catch((error) => {
                    return res.status(500).json({
                        error: true,
                        message: error.message
                    })
                })
        } catch (error) {
            return res.status(500).json({
                error: true,
                message: error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error, Please Try Again"
        })
    }
}

users.fetchSigninUserDetails = (req, res) => {
    try {
        const userId = req.user.user_id
        UserDetails.findOne({ posted_by: userId })
            .then((userDetails) => {
                return res.status(200).json({
                    error: false,
                    message: "User Details Fetched",
                    data: userDetails
                })
            })
            .catch((error) => {
                return res.status(422).json({
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

users.fetchOtherUserDetails = (req, res) => {
    try {
        User.findOne({ username: req.params.username })
            .select("-password")
            .then(user => {
                // console.log(user);
                UserDetails.find({ posted_by: user._id })
                    // .populate("posted_by comments.posted_by", "_id username name")
                    .exec((err, details) => {
                        if (err) {
                            return res.status(422).json({ error: err })
                        }
                        return res.status(200).json({
                            error: false,
                            message: "User Fetched",
                            // user: user,
                            details: details
                        })
                    })
            }).catch(err => {
                console.log(err.message);
                return res.status(404).json({ error: true, message: "User not found" })
            })
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error, Please Try Again"
        })
    }
}

module.exports = users;