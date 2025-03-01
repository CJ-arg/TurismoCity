const {DataTypes} = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}