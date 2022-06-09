const Monsters = require('../models/Monsters');
const Category = require('./Category');
const User = require('./User');


Monsters.belongsTo(Category, {
    foreignKey: "category_id",
});

Category.hasMany(Monsters, {
    foreignKey: "category_id",
});

User.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = {
    Monsters,
    Category,
    User
}