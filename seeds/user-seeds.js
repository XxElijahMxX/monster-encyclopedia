const sequelize = require('../config/connection');
const { User } = require('../models');

const userInfo = [
  {
    username: 'XxEliMxX',
    email: 'testemail1@test.com',
    password: 'password123'
  },
  {
    username: 'testUser1',
    email: 'test1@test.com',
    password: 'password123'
  }
];

const seedUser = () => User.bulkCreate(userInfo, {individualHooks: true});

module.exports = seedUser;
