const { sequelize, DataTypes } = require('./imports')

const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

module.exports = {
    TypeBrand
}