const router = require("express").Router()
const auth = require("../controllers/auth")
const user = require("../controllers/user")
const post = require("../controllers/post")
const middlewares = require("../middleware/index")

router.post("/signup",auth.signup)
router.post("/signin",middlewares.login,auth.signin)

router.get("/user",user.user)

router.get("/post",post.posts)

module.exports = router;