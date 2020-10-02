const router = require("express").Router()
const auth = require("../controllers/auth")
const user = require("../controllers/user")
const post = require("../controllers/post")
const middlewares = require("../middleware/verify_user")

router.post("/signup",auth.signup)
router.post("/signin",auth.signin)
router.post("/protected",middlewares.verifyUser,auth.protected)

router.get("/user/:username",middlewares.verifyUser,user.otherUserProfile)
router.put("/follow",middlewares.verifyUser,user.follow)
router.put("/unfollow",middlewares.verifyUser,user.unfollow)
router.get("/user",middlewares.verifyUser,user.fetchAllUser)
router.post("/adduserdetails",middlewares.verifyUser,user.addUserDetails)
router.get("/fetchsigninuserdetails",middlewares.verifyUser,user.fetchSigninUserDetails)
router.get("/fetchotheruserdetails/:username",middlewares.verifyUser,user.fetchOtherUserDetails)
router.put("/updateprofilephoto",middlewares.verifyUser,user.updateProfilePhoto)

router.post("/createpost",middlewares.verifyUser,post.createPosts)
router.get("/fetchallpost",middlewares.verifyUser,post.fetchAllPosts)
router.get("/fetchfollowusersposts",middlewares.verifyUser,post.fetchFollowUsersPosts)
router.get("/userpost",middlewares.verifyUser,post.signUserPost)
router.put("/like",middlewares.verifyUser,post.likePost)
router.put("/unlike",middlewares.verifyUser,post.unLikePost)
router.put("/comment",middlewares.verifyUser,post.commentPost)

module.exports = router;