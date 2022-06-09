const { Monsters } = require('../models');

const monsterData = [
    {
        monster_name: 'Astaroth',
        category_id: 1,
    },
    {
        monster_name: 'Lucifer',
        category_id: 1,
    },
    {
        monster_name: 'Vampire',
        category_id: 2,
    },
    {
        monster_name: 'Zombie',
        category_id: 2,
    },
    {
        monster_name: 'Mothman',
        category_id: 3,
    },
    {
        monster_name: 'Chupacabra',
        category_id: 3,
    },
];

const seedMonsters = () => Monsters.bulkCreate(monsterData);

module.exports = seedMonsters;