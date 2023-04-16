const {BasketDevice} = require('../models/models')

class BasketController {
    async removeFromBasket(req, res) {
        const {id} = req.body
        const basketDevice = await BasketDevice.destroy({
            where: {id}
        })
        return res.json(basketDevice)
    }

    async getBasket(req, res) {
        let {id} = req.params
        let basketDevices = await BasketDevice.findAll({
            where: {basketId: id}
        })
        return res.json(basketDevices)
    }
}

module.exports = new BasketController()