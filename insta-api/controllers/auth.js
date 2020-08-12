let auth = {}

auth.signup = (req, res) => {
    try {

        res.json({ msg: "sign up route" })
    } catch (error) {
        res.status(500).json({
            err: true,
            message: err.message
        })
    }
}

auth.signin = (req, res) => {
    try {
        res.json({ msg: "sign in route" })
    } catch (error) {
        res.status(500).json({
            err: true,
            message: err.message
        })
    }

}

module.exports = auth;