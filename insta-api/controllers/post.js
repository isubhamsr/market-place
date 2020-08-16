const mongoose = require("mongoose")
const Post = mongoose.model("Post")

let posts = {}

posts.createPosts = (req, res) => {
    try {
        const { post_title, post_description, post_image } = req.body

        if (!post_title || !post_description) {
            return res.status(422).json({ error: true, message: "All Fields are require" })
        }
        console.log(req.user);
        try {
            const post = new Post({
                post_title: post_title,
                post_description: post_description,
                posted_by: req.user.user_id
            })

            post.save()
                .then((post) => {
                    return res.status(200).json({ error: false, msg: "Post Successfull", data: post })
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
            message: error.message
        })
    }
}

posts.fetchAllPosts = (req,res)=>{
    try {
        Post.find()
        .populate("posted_by", "_id username")
        .then((posts)=>{
            return res.status(200).json({
                error: false,
                message: "Fetch Posts",
                posts : posts
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
            message: error.message
        })
    }
}

module.exports = posts;