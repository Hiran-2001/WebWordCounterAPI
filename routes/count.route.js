const router = require("express").Router()
const { postUrl } = require("../controllers/count.controller")


router.post('/postcount',postUrl)

module.exports = router