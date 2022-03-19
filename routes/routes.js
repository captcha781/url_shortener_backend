const express = require("express")
const res = require("express/lib/response")
const controllers = require("../controllers/controller")
const router = express.Router()


router.route("/:tiny").get(controllers.getmainurl)
router.route("/post/").post(controllers.generatemainurl)

module.exports = router