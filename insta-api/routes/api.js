const router = require("express").Router()
const auth = require("../controllers/auth")
const user = require("../controllers/user")
const post = require("../controllers/post")
const middlewares = require("../middleware/verify_user")

router.post("/signup",auth.signup)
router.post("/signin",auth.signin)
router.post("/protected",middlewares.verifyUser,auth.protected)

router.get("/user",user.user)

router.get("/post",post.posts)

module.exports = router;