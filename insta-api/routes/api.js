const router = require("express").Router()
const controller = require("../controllers/controllers")
const middlewares = require("../middleware/index")

router.post("/signup",middlewares.login,controller.signup)
router.post("/signin",controller.signin)
// router.get("/verify",controller.emailVerify)

module.exports = router;