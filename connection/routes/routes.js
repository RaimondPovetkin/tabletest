const Router = require('express')
const router = new Router()
const controller = require('../controller/controller')

router.get('/table', controller.getFields)

module.exports = router