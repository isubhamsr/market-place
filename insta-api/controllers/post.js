const mongoose = require("mongoose")
const Post = mongoose.model("Post")

let posts = {}

posts.createPosts = (req, res) => {
    try {
        const { post_title, post_description, post_image } = req.body

        if (!post_description) {
            return res.status(422).json({ error: true, message: "All Fields are require" })
        }
        // console.log(req.user);
        try {
            const post = new Post({
                // post_title: post_title,
                post_image: post_image,
                post_description: post_description,
                posted_by: req.user.user_id
            })

            post.save()
                .then((post) => {
                    return res.status(200).json({ error: false, message: "Post Successfull", data: post })
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

posts.signUserPost = (req, res)=>{
    try {
        Post.find({posted_by:req.user.user_id})
        .then((posts)=>{
            if(posts.length === 0){
                return res.status(422).json({ error: true, message: "No Posts are Created by This User" })
            }
            return res.status(200).json({
                error : false,
                message : "Posts are Fetched",
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

posts.likePost = (req,res)=>{
    try {
        const userId = req.user.user_id
        const postId = req.body.postId
        Post.findByIdAndUpdate(postId,{
            $push : {likes:userId}
        },{
            new:true
        }).exec((error, result)=>{
            if(error){
                return res.status(422).json({error:true, message: error.message})
            }
            return res.status(200).json({error: false, message: "Like Added", data: result})
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }
}

posts.unLikePost = (req,res)=>{
    try {
        const userId = req.user.user_id
        const postId = req.body.postId
        Post.findByIdAndUpdate(postId,{
            $pull : {likes:userId}
        },{
            new:true
        }).exec((error, result)=>{
            if(error){
                return res.status(422).json({error:true, message: error.message})
            }
            return res.status(200).json({error: false, message: "Like Added", data: result})
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }
}

module.exports = posts;