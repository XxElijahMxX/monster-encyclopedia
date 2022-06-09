// const Monsters = require('../models/Monsters');
const Category = require('./Category');
const User = require('./User');


// Monsters.belongsTo(Category, {
//     foreignKey: "category_id",
// });

// Category.hasMany(Monsters, {
//     foreignKey: "category_id",
// });

User.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = {
<<<<<<< HEAD
    // Monsters,
    Category
=======
    Monsters,
    Category,
    User
>>>>>>> dd23d284695d89cda6a82ee7e37e699297688845
}