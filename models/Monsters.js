const { Model, DataTypes } = require('sequelize');
``
const sequelize = require('../config/connection');

class Monsters extends Model {}
    
    Monsters.init(
        {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        monster_name:{
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "category",
                key: "id"
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'monsters',
      }
    );

module.exports = Monsters;
    


