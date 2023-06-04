const { User } = require('./user-model')
const { Basket, BasketDevice } = require('./basket-model')
const { Device, DeviceInfo } = require('./device-model')
const { Rating } = require('./rating-model')
const { Type } = require('./type-model')
const { Brand } = require('./brand-model')
const { TypeBrand } = require('./type-brand-model')

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasOne(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, { as: 'info' })
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })

module.exports = {
    User,
    Basket, BasketDevice,
    Device, DeviceInfo,
    Rating,
    Type,
    Brand,
    TypeBrand
}