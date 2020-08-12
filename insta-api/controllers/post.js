let posts = {}

posts.posts = (req, res) => {
    try {

        res.json({ msg: "post route" })
    } catch (error) {
        res.status(500).json({
            err: true,
            message: err.message
        })
    }
}

module.exports = posts;