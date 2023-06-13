const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/exports')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, typeId, brandId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({ name, price, typeId, brandId, img: fileName })

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                });
            }

            return res.json(device)
        } catch (err) {
            return next(ApiError.badRequest(err.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let { typeId, brandId, page, limit } = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let devices;
            if (!typeId && !brandId) {
                devices = await Device.findAndCountAll({ limit, offset })
            }
            if (typeId && !brandId) {
                devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
            }
            if (!typeId && brandId) {
                devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
            }
            if (typeId && brandId) {
                devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset })
            }
            return res.json(devices)
        } catch (err) {
            return next(ApiError.badRequest(err.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params
            const device = await Device.findOne(
                {
                    where: { id },
                    include: [
                        { model: DeviceInfo, as: 'info' }
                    ]
                }
            )
            return res.json(device)
        } catch (err) {
            return next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new DeviceController()