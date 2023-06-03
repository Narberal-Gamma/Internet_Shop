const { Brand } = require('../models/exports')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        try {
            const { name } = req.body
            const brand = await Brand.create({name})
            return res.json(brand)
        } catch (err) {
            return res.status(500).json({ message: `Some Brand create Error ${err}` })
        }
    }

    async getAll(req, res) {
        try {
            const brands = await Brand.findAll()
            return res.json(brands)
        } catch (err) {
            return res.status(500).json({ message: `Some Brand getAll Error ${err}` })
        }
    }
}

module.exports = new BrandController()