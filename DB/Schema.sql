DROP DATABASE IF EXISTS Burgers_DB;
CREATE DATABASE Burgers_DB;
USE Burgers_DB;
CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
	burger_name varchar
    (255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
	PRIMARY KEY
    (id)
);