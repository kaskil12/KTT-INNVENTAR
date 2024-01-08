const {Model, DataTypes} = require("sequelize");

module.exports = class Utstyr extends Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: DataTypes.STRING, 
                defaultValue: "Sykkel"
            },
            code: {
                type: DataTypes.STRING,
                defaultValue: "1234"
            },
            item: {
                type: DataTypes.STRING,
                defaultValue: "Bremse"
            }
        },
        {
            tableName: "Utstyr",
            createdAt: false,
            updatedAt: false,
            sequelize
        })
    }
}