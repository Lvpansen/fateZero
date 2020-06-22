const Router = require('koa-router')
const router = new Router()

const country_controller = require('../app/controllers/country')

router.post('/add', country_controller.addCountry)
router.post('/update', country_controller.updateCountry)

module.exports = router