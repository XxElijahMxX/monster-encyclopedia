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








module.exports = router;