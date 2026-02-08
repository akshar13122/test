const { DataTypes } = require('sequelize');
const sequelize = require('../Utils/db');

const purchseModel = sequelize.define(
    "purchseModel",
    {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        userid : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        productId : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        productName : {
            type : DataTypes.STRING(100),
            allowNull : true
        },
        productQty : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
          productWeight : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        totalBill : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    },
    {
        tableName : "purchase",
        timestamps : true
    }
)

module.exports = purchseModel;