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
            res.status(404).json({ message: 'Requested category not found'});
            return;
        }
        res.json(categoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});












module.exports = router;