const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
router.post('/', basketController.addToBasket)
router.delete('/basket', basketController.deleteFromBasket)
router.get('/basket', basketController.getGoods)

module.exports = router