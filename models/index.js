const Monsters = require('../models/Monsters');
const Category = require('./Category');

Monsters.belongsTo(Category, {
    foreignKey: "category_id",
});

Category.hasMany(Monsters, {
    foreignKey: "category_id",
});



module.exports = {
    Monsters,
    Category
}