DROP DATABASE IF EXISTS monsters_db;

CREATE DATABASE monsters_db;

USE monsters_db;

CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);


CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(id)
);


CREATE TABLE monster (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    monster_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id)
);


SELECT * FROM category;
SELECT * FROM role;
SELECT * FROM monster;