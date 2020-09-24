const router = require("express").Router()
const auth = require("../controllers/auth")
const user = require("../controllers/user")
const post = require("../controllers/post")
const middlewares = require("../middleware/verify_user")

router.post("/signup",auth.signup)
router.post("/signin",auth.signin)
router.post("/protected",middlewares.verifyUser,auth.protected)

router.get("/user",user.user)

router.post("/createpost",middlewares.verifyUser,post.createPosts)
router.get("/fetchallpost",middlewares.verifyUser,post.fetchAllPosts)
router.get("/userpost",middlewares.verifyUser,post.signUserPost)
router.put("/like",middlewares.verifyUser,post.likePost)
router.put("/unlike",middlewares.verifyUser,post.unLikePost)
router.put("/comment",middlewares.verifyUser,post.commentPost)

module.exports = router;