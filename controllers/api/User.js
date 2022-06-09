const router = require('express').Router();
const { User, Category } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
      })
        .then(userValue => res.json(userValue))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
})

router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Category,
          attributes: ['id', 'user_id', 'category_name'],
        },
      ],
    })
    .then(userValue => {
        if (!userValue) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(userValue);
    })
    .catch(err => {
        console.log(err);
    });
});

router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(userValue => {
        req.session.save(() => {
          req.session.user_id = userValue.id;
          req.session.username = userValue.username;
          req.session.loggedIn = true;
  
          res.json(userValue);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(userValue => {
      if (!userValue) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = userValue.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        // declare session variables
        req.session.user_id = userValue.id;
        req.session.username = userValue.username;
        req.session.loggedIn = true;
  
  
        res.json({ user: userValue, message: 'You are now logged in!' });
      }); 
    });
  });

  router.put('/:id', (req, res) => {
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(userValue => {
        if (!userValue) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(userValue);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(userValue => {
        if (!userValue) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(userValue);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;
  