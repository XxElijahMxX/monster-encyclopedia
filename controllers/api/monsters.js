const router = require('express').Router();
const { Monsters, Category } = require('../../models');

router.get('/', (req, res) => {
    Monsters.findAll({
        attributes: ['id', 'category_id', 'monster_name'],
        include: [
            {
                model: Category,
                attributes: ['category_name', 'id']
            },
        ]
    })
    .then((monData) => res.json(monData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Monsters.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['monster_name', 'id', 'category_id'],
        include: [
            {
                model: Category,
                attributes: ['id', 'category_name'],
            }
        ]
    })
    .then((monData) => {
        if (!monData) {
            res.status(404).json({ message: 'The monster you requested does not exist' });
            return;
        }
        res.json(monData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Monsters.create({
        monster_name: req.body.monster_name,
        category_id: req.body.category_id
    })
    .then(monData => res.json(monData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Monsters.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then(monData => {
        if (!monData[0]) {
            res.status(404).json({ message: 'The monster could not be found with this id'});
            return;
        }
        res.json(monData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Monsters.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(monData => {
        if (!monData) {
            res.status(404).json({ message: 'Monster could not be found with this id'});
            return;
        }
        res.json(monData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




module.exports = router;