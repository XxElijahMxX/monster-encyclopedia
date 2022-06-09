const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, Monsters, User } = require('../models');

// get all category cards
router.get('/', (req, res) => {
    console.log(req.session);
    Category.findAll({
        attributes: ['id, category_name'],
        include: [
            {
                model: User,
                attributes: ['username'],
            },
            {
                model: Monsters,
            },
        ],

    })
    .then((postData) => {
        const categories = postData.map((category) => category.get({ plain: true }));

        res.render('homepage', {
            categories,
            loggedIn: req.session.loggedIn,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/categories/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id', 'category_name'], 
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })
    .then((postData) => {
        if (!postData) {
            res.status(404).json({ message: 'No category found with this id!'});
            return;
        }

        const category = postData.get({ plain: true });

        res.render('one-category', {
            category,
            loggedIn: req.session.loggedIn,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('add-categories', (req, res) => {
    res.render('add-categories');
});

module.exports = router;