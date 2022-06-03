const Monsters = require('./Monsters');
const User = require('User');
const Category = require('./Category');

Monsters.belongsTo(Category, {
    foreignKey: "category_id",
    onDelete: "CASCADE"
})

module.exports = {
    Monsters,
    User,
    Category
}