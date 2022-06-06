const seedCategories = require('./category-seeds');
const seedMonsters = require('./monsters-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedMonsters();
  console.log('\n----- MONSTERS SEEDED -----\n');

process.exit(0);
};

seedAll();