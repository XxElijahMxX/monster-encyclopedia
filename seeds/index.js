const seedCategories = require('./category-seeds');
const seedMonsters = require('./monsters-seeds');


const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedMonsters();
  console.log('\n----- MONSTERS SEEDED -----\n');

process.exit(0);
};

seedAll();