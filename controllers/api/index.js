const router = require('express').Router();
const categoryRoutes = require('./Category');
const monsterRoutes = require('./monsters');




router.use('/categories', categoryRoutes)
router.use('/monsters', monsterRoutes)

module.exports = router;