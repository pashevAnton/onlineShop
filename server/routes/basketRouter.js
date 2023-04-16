const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.delete('/:id', basketController.removeFromBasket)
router.get('/:id', basketController.getBasket)

module.exports = router