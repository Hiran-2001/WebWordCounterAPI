const router = require("express").Router()
const { postUrl, getPrevious, deleteUrl } = require("../controllers/count.controller")


router.post('/postcount',postUrl)
router.get('/previous',getPrevious)
router.delete('/delete/:id',deleteUrl)

module.exports = router 