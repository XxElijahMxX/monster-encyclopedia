const router = require('express').Router();
const apiRoutes = require('./api');
<<<<<<< HEAD
const homeRoutes = require('./home-routes.js');
=======
const homeRoutes = require('./Home');
>>>>>>> dd23d284695d89cda6a82ee7e37e699297688845

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// // route to render login page //
// router.get('/login', (req, res) => {
//   res.render('login');
// });

module.exports = router;