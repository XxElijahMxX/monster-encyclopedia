const router = require('express').Router();
const categoryRoutes = require('./Category');




router.use('/categories', categoryRoutes)

module.exports = router;