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
        res.status(500).json(err)
    });
});

router.post('/', (req, res) => {
    Category.create({
        category_name: req.body.category_name
    })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Category.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(categoryData => {
        if (!categoryData[0]) {
            res.status(404).json({ message: 'The category could not be found with this id'});
            return;
        }
        res.json(categoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(categoryData => {
        if(!categoryData) {
            res.status(404).json({ message: 'The category could not be found with this id'});
            return;
        }
        res.json(categoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;