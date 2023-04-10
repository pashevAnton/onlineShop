const {Basket, BasketDevice, Device, DeviceInfo} = require('../models/models')
class BrandController {
    async getGoods(req, res) {
        const devices = await BasketDevice.findAll()
        return res.json(devices)
    }

    async deleteFromBasket(req, res){
        const {id} = req.params
        const device = await Device.destroy(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }

    async addToBasket(req, res){
        const {device} = req.body
        const devices = await BasketDevice.create({device})
        return res.json(devices)
    }
}

module.exports = new BrandController()