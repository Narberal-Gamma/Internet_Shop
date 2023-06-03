class DeviceController {
    async create(req, res) {
        try {
            const { name, price, type_id, brand_id, info } = req.body
            const { img } = req.files
        } catch (err) {
            return res.status(500).json({ message: `Some Device create Error ${err}` })
        }
    }

    async getAll(req, res) {
        try {

        } catch (err) {
            return res.status(500).json({ message: `Some Device getAll Error ${err}` })
        }
    }

    async getOne(req, res) {
        try {
            res.json(500)
        } catch (err) {
            return res.status(500).json({ message: `Some Device getOne Error ${err}` })
        }
    }
}

module.exports = new DeviceController()