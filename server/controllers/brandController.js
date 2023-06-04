const { Brand } = require('../models/exports')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res, next) {
        try {
            const { name } = req.body
            const brand = await Brand.create({name})
            return res.json(brand)
        } catch (err) {
            return next(ApiError.badRequest(err.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll()
            return res.json(brands)
        } catch (err) {
            return next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new BrandController()