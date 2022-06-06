const router = require('express').Router();
const { Category, Monsters } = require('../../models');

// '/api/categories' endpoint

router.get('/', (req, res) => {
    Category.findAll({
        attributes: ['id', 'category_name'],
        include: [
            {
                model: Monsters,
                attributes: ['category_id', 'id', 'monster_name']
            }
        ]
    })
    .then(categoryData => {
        if(!categoryData) {
            res.status(404).json({ message: 'Requested category was not found'});
            return;
        }
        res.json(categoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'category_name'],
        include: [
            {
                model: Monsters,
                attributes: ['category_id', 'id', 'monster_name']
            }
        ]
    })
    .then(categoryData => {
        if(!categoryData) {
            res.status(404).json({ message: 'Requested category was not found' });
            return;
        }
        res.json(categoryData);
    })
    .catch(err => {
        console.log(err)
    });
});












module.exports = router;