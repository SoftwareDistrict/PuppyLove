DROP DATABASE IF EXISTS puppy_love;

CREATE DATABASE puppy_love;

USE puppy_love;

CREATE TABLE IF NOT EXISTS user(
	id INT NOT NULL AUTO_INCREMENT,
	username TEXT NOT NULL,
	email TEXT NOT NULL,
	cell TEXT NOT NULL,
	latitude DECIMAL NOT NULL,
	longitude DECIMAL NOT NULL,
	home_latitude DECIMAL NOT NULL,
	home_longitude DECIMAL NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS dog(
	id INT NOT NULL AUTO_INCREMENT,
	name TEXT NOT NULL,
	breed TEXT NOT NULL,
	weight INT NOT NULL,
	age INT NOT NULL,
	fixed TINYINT(1) NOT NULL,
	description TEXT NOT NULL,
	image TEXT NOT NULL,
	id_user INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS location(
	id INT NOT NULL AUTO_INCREMENT,
	location_name TEXT NOT NULL,
	latitude DECIMAL NOT NULL,
	longitude DECIMAL NOT NULL,
	description TEXT NOT NULL,
	image_url TEXT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS message(
	id INT NOT NULL AUTO_INCREMENT,
	user_from INT NOT NULL,
	user_to INT NOT NULL,
	message TEXT NOT NULL,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY(user_from) REFERENCES user(id),
	FOREIGN KEY(user_to) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS friend_joint(
	id_dog INT NOT NULL,
	id_dogFriend INT NOT NULL,
	bool_friend TINYINT(1) NOT NULL,
	FOREIGN KEY(id_dog) REFERENCES dog(id),
	FOREIGN KEY(id_dogFriend) REFERENCES dog(id)
);

CREATE TABLE IF NOT EXISTS fav_location_joint(
	id_location INT NOT NULL,
	id_dog INT NOT NULL,
	FOREIGN KEY(id_location) REFERENCES location(id),
	FOREIGN KEY(id_dog) REFERENCES dog(id)
);

/* 
To use this file run:
	mysql -u root <~path to initializeSchema.sql~ 
	OR 
	mariadb -u root <~path to initializeSchema.sql~
You should run these commands only when:
	1. You first pull repo from upstream
	2. You make a change in the schemas 
*/
