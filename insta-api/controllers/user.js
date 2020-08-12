let users = {}

users.user = (req, res) => {
    try {

        res.json({ msg: "user route" })
    } catch (error) {
        res.status(500).json({
            err: true,
            message: err.message
        })
    }
}

module.exports = users;