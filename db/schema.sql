CREATE DATABASE burgers2_db;
USE burgers2_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt DATETIME NOT NULL,
	PRIMARY KEY (id)
);