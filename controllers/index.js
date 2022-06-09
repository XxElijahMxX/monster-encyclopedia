const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// route to render login page //
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;