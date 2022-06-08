const router = require('express').Router();
const categoryRoutes = require('./Category');
const monsterRoutes = require('./monsters');
const userRoutes = require('./User');



router.use('/users', userRoutes);
router.use('/categories', categoryRoutes)
router.use('/monsters', monsterRoutes)

module.exports = router;