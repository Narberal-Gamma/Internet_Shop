const { Type } = require('../models/exports')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
        try {
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        } catch (err) {
            return res.status(500).json({ message: `Some Type create Error ${err}` })
        }
    }

    async getAll(req, res) {
        try {
            const types = await Type.findAll()
            return res.json(types)
        } catch (err) {
            return res.status(500).json({ message: `Some Type getAll Error ${err}` })
        }
    }
}

module.exports = new TypeController()