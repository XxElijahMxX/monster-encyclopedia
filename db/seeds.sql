-- categories --
INSERT INTO category (name)
VALUE ('Demons');
INSERT INTO category (name)
VALUE ('Undead');
INSERT INTO category (name)
VALUE ('Mythical');


INSERT INTO role (category_id)
VALUE ("1");
INSERT INTO role (category_id)
VALUE ("2");
INSERT INTO role (category_id)
VALUE ("3");


-- monster names/id --
INSERT INTO monster (monster_name, role_id)
VALUE ("Vampire", 2);
INSERT INTO monster (monster_name, role_id)
VALUE ("Zombie", 2);
INSERT INTO monster (monster_name, role_id)
VALUE ("Astaroth",1);
INSERT INTO monster (monster_name, role_id)
VALUE ("Lucifer", 1 );
INSERT INTO monster (monster_name, role_id)
VALUE ("Mothman", 3);
INSERT INTO monster (monster_name, role_id)
VALUE ("Chupacabra", 3);