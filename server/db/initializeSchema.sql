DROP DATABASE IF EXISTS puppy_love;

CREATE DATABASE puppy_love;

USE puppy_love;

CREATE TABLE IF NOT EXISTS users(
	id INT NOT NULL AUTO_INCREMENT,
	username TEXT,
	email TEXT NOT NULL,
	cell TEXT,
	latitude DECIMAL,
	longitude DECIMAL,
	home_town TEXT,
	pref_breed TEXT,
	pref_age_min TEXT,
	pref_age_max TEXT,
	pref_fixed TEXT,
	distance INT,
	googleId TEXT NOT NULL,
	-- acc_created TINYINT(1),
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS dogs(
	id INT NOT NULL AUTO_INCREMENT,
	dog_name TEXT NOT NULL,
	breed TEXT NOT NULL,
	weight INT NOT NULL,
	age INT NOT NULL,
	fixed TINYINT(1) NOT NULL,
	description TEXT NOT NULL,
	image TEXT NOT NULL,
	id_user INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(id_user) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS locations(
	id INT NOT NULL AUTO_INCREMENT,
	location_name TEXT NOT NULL,
	latitude DECIMAL NOT NULL,
	longitude DECIMAL NOT NULL,
	description TEXT NOT NULL,
	image_url TEXT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS messages(
	id INT NOT NULL AUTO_INCREMENT,
	user_from INT NOT NULL,
	user_to INT NOT NULL,
	message TEXT NOT NULL,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY(user_from) REFERENCES users(id),
	FOREIGN KEY(user_to) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS friend_joint(
	id_dog INT NOT NULL,
	id_dogFriend INT NOT NULL,
	bool_friend TINYINT(1) NOT NULL,
	FOREIGN KEY(id_dog) REFERENCES dogs(id),
	FOREIGN KEY(id_dogFriend) REFERENCES dogs(id)
);

CREATE TABLE IF NOT EXISTS fav_location_joint(
	id_location INT NOT NULL,
	id_dog INT NOT NULL,
	FOREIGN KEY(id_location) REFERENCES locations(id),
	FOREIGN KEY(id_dog) REFERENCES dogs(id)
);

/* 
To use this file run:
	mysql -u root<server/db/initializeSchema.sql
	OR 
	mariadb -u root <~path to initializeSchema.sql~
You should run these commands only when:
	1. You first pull repo from upstream
	2. You make a change in the schemas 
*/
