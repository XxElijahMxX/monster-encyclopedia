const router = require('express').Router();


router.get('/', (req, res) => {
    var monsters = [
        {
          id: 0,
          name: "zombie1",
          location: "europe",
          type: "undead",
          description:
            "not quite alive and not quite dead.it will eat your brains, and if you are not careful you will become one as well",
        },
        {
          id: 1,
          name: "unicorn",
          location: "new zealand",
          type: "mythical",
          description: "beautiful horse with a big horn on its head",
        },
        {
            id: 2,
          name: "satan",
          location: "hell",
          type: "demon",
          description: "big red pitch fork wielding jerk",
        },
        {
            id: 3,
          name: "squirtle",
          location: "pacific ocean",
          type: "aquatic",
          description: "squirtle-squirtle",
        },
      ];
    res.render('homepage', {
        monsters: monsters
    });

})





module.exports = router;