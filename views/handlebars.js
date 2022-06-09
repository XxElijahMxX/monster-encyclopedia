// const Handlebars = require("handlebars");
// const MonsterName = Handlebars.compile("MonsterName: {{MonsterName}}");
// console.log(template({MonsterName: "Leviathan"}))

// const MonsterDescription = Handlebars.compile("MonsterDescription: {{MonsterDescription}}");
// console.log(template({MonsterDescription:"an enormous sea monster... two beams of glowing light pierce the surface of the water. As the sea begins to boil, a feeling of defeat settles in your heart. Already you can see the armored scales rising from the depths. Leviathan is upon you... these moments are to be your last."}))

//----------------------------------------------------------------

var singleMonster = {
  name: "zombie",
  location: "europe",
  type: "undead",
  description:
    "not quite alive and not quite dead.it will eat your brains, and if you are not careful you will become one as well",
};

var monstersArray = [
  {
    id: 0,
    name: "zombie",
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
    description: "big red pitch fork wielding...",
  },
  {
      id: 3,
    name: "squirtle",
    location: "pacific ocean",
    type: "aquatic",
    description: "squirtle-squirtle",
  },
];

$(document).ready(function () {
  var allMonsterTemplate = $("#all-monster-template").html();
  var allMonsterTemplateScript = Handlebars.compile(allMonsterTemplate);
  var allMonsterHtml = allMonsterTemplateScript({
    monstersArray: monstersArray,
  });

  $(document.body).append(allMonsterHtml);

  var monsterTemplate = $("#monster-template").html();
  var monsterTemplateScript = Handlebars.compile(monsterTemplate);
  var monsterHtml = monsterTemplateScript(monstersArray [2]);

  $(document.body).append(monsterHtml);

  //   $(".monster-list-container").html(
  //     compiledMonsterTemplate(newMonster.monsters[2])
  //   );
});
