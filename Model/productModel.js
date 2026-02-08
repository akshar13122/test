const sequelize = require('../Utils/db');
const { DataTypes } = require("sequelize");

const productModel = sequelize.define(
    "productModel",
    {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        productname : {
            type : DataTypes.STRING(100),
            allowNull : false,
            unique : true
        },
        productWeight : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        productprice : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    },
    {
        tableName : "products",
        timestamps : true,
    }
)

module.exports = productModel