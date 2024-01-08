const {Model, DataTypes} = require("sequelize");

module.exports = class Utstyr extends Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: DataTypes.STRING, 
                defaultValue: "Sykkel"
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