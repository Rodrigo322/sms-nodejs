const { Router } = require('express')

const SendMessageController = require('./controller/sendMessegeController')

const router = Router()

router.post('/send', SendMessageController.sendMessege)

module.exports = router