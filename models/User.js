const { Model, DataTypes } = require('sequelize');
``
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
       id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       },
       
       username: {
           type: DataTypes.STRING,
           allowNull: false,

       },
       bio: {
           type: DataTypes.STRING,
           allowNull: true,
       },

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'users'
    }
);

module.exports = User;