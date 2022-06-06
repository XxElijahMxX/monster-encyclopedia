const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Demons',
    },
    {
        category_name: 'Undead',
    },
    {
        category_name: 'Mythical',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;