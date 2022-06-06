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









module.exports = router;