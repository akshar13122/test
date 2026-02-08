const { DataTypes } = require("sequelize");
const sequelize = require("../Utils/db");

const userModel = sequelize.define(
    "userModel",
    {
        id : {type : DataTypes.INTEGER,
             autoIncrement : true,
             primaryKey : true,
        },
        name : {
            type : DataTypes.STRING(100),
            allowNull : false 
        },
        email : {
            type : DataTypes.STRING(100),
            allowNull : false,
            unique : true
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    },
    {
        tableName : "users",
        timestamps : true
    }
)

module.exports = userModel