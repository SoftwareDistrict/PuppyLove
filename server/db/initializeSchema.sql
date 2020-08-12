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

-- USER (all lat/long and home_lat/home_long are set to New Orleans)
-- INSERT INTO user (username, email, cell, latitude, longitude, home_latitude, home_longitude) VALUES ();
INSERT INTO user
	(username, email, cell, latitude, longitude, home_latitude, home_longitude)
VALUES
	("Tyler", "tyler@gamil.com", "(985)-123-4567", "29.9511", "90.0715", "29.9511", "90.0715");
INSERT INTO user
	(username, email, cell, latitude, longitude, home_latitude, home_longitude)
VALUES
	("Zoey", "zoey@gmail.com", "(985)-123-4567", "29.9511", "90.0715", "29.9511", "90.0715");
INSERT INTO user
	(username, email, cell, latitude, longitude, home_latitude, home_longitude)
VALUES
	("John", "john@gmail.com", "(985)-123-4567", "29.9511", "90.0715", "29.9511", "90.0715");
INSERT INTO user
	(username, email, cell, latitude, longitude, home_latitude, home_longitude)
VALUES
	("Timmy", "timmy@gmail.com", "(985)-123-4567", "29.9511", "90.0715", "29.9511", "90.0715");
INSERT INTO user
	(username, email, cell, latitude, longitude, home_latitude, home_longitude)
VALUES
	("Ashley", "ashley@gmail.com", "(985)-123-4567", "29.9511", "90.0715", "29.9511", "90.0715");

-- DOG (true is 1 and false is 0)
-- INSERT INTO dog (name, breed, weight, age, fixed, description, image, id_user) VALUES ((SELECT id FROM user WHERE username = ));
INSERT INTO dog
	(name, breed, weight, age, fixed, description, image, id_user)
VALUES
	("Chester", "Golden Lab", "12", "6", "1", "Just a baby.", "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg", (SELECT id FROM user WHERE username = "Tyler"));
INSERT INTO dog
	(name, breed, weight, age, fixed, description, image, id_user)
VALUES
	("Alfred", "Golden Lab", "68", "3", "1", "Big brother.", "https://tinyurl.com/y2czcnb2", (SELECT id FROM user WHERE username = "Tyler"));
INSERT INTO dog
	(name, breed, weight, age, fixed, description, image, id_user)
VALUES
	("Jared", "Pomeranian", "19", "4", "1", "He is a joker.", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQItDJF0FPk3zsXOxm8XHFA8wm1De8S1uPwQA&usqp=CAU", (SELECT id FROM user WHERE username = "Zoey"));
INSERT INTO dog
	(name, breed, weight, age, fixed, description, image, id_user)
VALUES
	("Dante", "Pug", "24", "7", "1", "Breathing problems.", "https://tinyurl.com/y3pjsd3l", (SELECT id FROM user WHERE username = "John"));
INSERT INTO dog
	(name, breed, weight, age, fixed, description, image, id_user)
VALUES
	("Scarlet", "Australian Shepherd", "52", "6", "1", "Beautiful soul.", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuefDhFZpW9NljnOWYJEZsWYK4FztlxEgCEw&usqp=CAU", (SELECT id FROM user WHERE username = "Ashley"));
INSERT INTO dog
	(name, breed, weight, age, fixed, description, image, id_user)
VALUES
	("Mako", "Dalmatian", "47", "2", "0", "Majestic.", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizakGYU46I9rz6-rv0JtruPgyy89YJWJtSg&usqp=CAU", (SELECT id FROM user WHERE username = "Timmy"));
INSERT INTO dog
	(name, breed, weight, age, fixed, description, image, id_user)
VALUES
	("Trigger", "Black Lab", "52", "2", "1", "Very smart and protective, also a great tracker.", "https://tinyurl.com/y2ch5jcd", (SELECT id FROM user WHERE username = "Timmy"));
-- LOCATION
-- INSERT INTO location (location_name, latitude, longitude, description, image_url) VALUES ();
INSERT INTO location
	(location_name, latitude, longitude, description, image_url)
VALUES
	("City Park", "30.0038", "90.0972", "Massive park with plenty of parking.", "https://tinyurl.com/yxpk9f74");
INSERT INTO location
	(location_name, latitude, longitude, description, image_url)
VALUES
	("Lafreniere Park", "29.9985", "90.2148", "Big park with plenty of fields. And it's right on the water!", "https://tinyurl.com/y3gpjxe3");
INSERT INTO location
	(location_name, latitude, longitude, description, image_url)
VALUES
	("Audubon Park", "29.9341", "90.1239", "Beutiful and safe area with plenty of shade.", "https://tinyurl.com/y6bysr43");
-- MESSAGE
-- INSERT INTO message (user_from, user_to, message, user_from, user_to) VALUES ((SELECT id FROM user WHERE username = ), (SELECT id FROM user WHERE username = ));
INSERT INTO message (user_from, user_to, message) VALUES ((SELECT id FROM user WHERE username = "Tyler"), (SELECT id FROM user WHERE username = "Zoey"), "Hiya!");
INSERT INTO message (user_from, user_to, message) VALUES ((SELECT id FROM user WHERE username = "Zoey"), (SELECT id FROM user WHERE username = "Tyler"), "Hello there Tyler.");
INSERT INTO message (user_from, user_to, message) VALUES ((SELECT id FROM user WHERE username = "Timmy"), (SELECT id FROM user WHERE username = "Tyler"), "Meet at Audubon?");
INSERT INTO message (user_from, user_to, message) VALUES ((SELECT id FROM user WHERE username = "Tyler"), (SELECT id FROM user WHERE username = "Timmy"), "Yeah, that sounds good.");
INSERT INTO message (user_from, user_to, message) VALUES ((SELECT id FROM user WHERE username = "Timmy"), (SELECT id FROM user WHERE username = "Tyler"), "1:20 okay?");
INSERT INTO message (user_from, user_to, message) VALUES ((SELECT id FROM user WHERE username = "Tyler"), (SELECT id FROM user WHERE username = "Timmy"), "Perfect!");
-- FRIENDS (true is 1 and false is 0)
-- INSERT INTO friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM dog WHERE name = ), (SELECT id FROM dog WHERE name = ),);
INSERT INTO friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM dog WHERE name = "Chester"), (SELECT id FROM dog WHERE name = "Jared"), "1");
INSERT INTO friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM dog WHERE name = "Alfred"), (SELECT id FROM dog WHERE name = "Mako"), "1");
INSERT INTO friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM dog WHERE name = "Alfred"), (SELECT id FROM dog WHERE name = "Trigger"), "1");
INSERT INTO friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM dog WHERE name = "Mako"), (SELECT id FROM dog WHERE name = "Scarlet"), "1");
INSERT INTO friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM dog WHERE name = "Jared"), (SELECT id FROM dog WHERE name = "Dante"), "1");
-- FAV_LOCATION
-- INSERT INTO fav_location_joint (id_location, id_dog) VALUES ((SELECT id FROM location WHERE location_name = ), (SELECT id FROM location WHERE name = ));
INSERT INTO fav_location_joint (id_location, id_dog) VALUES ((SELECT id FROM location WHERE location_name = "City Park"), (SELECT id FROM dog WHERE name = "Trigger"));
INSERT INTO fav_location_joint (id_location, id_dog) VALUES ((SELECT id FROM location WHERE location_name = "City Park"), (SELECT id FROM dog WHERE name = "Alfred"));
INSERT INTO fav_location_joint (id_location, id_dog) VALUES ((SELECT id FROM location WHERE location_name = "City Park"), (SELECT id FROM dog WHERE name = "Mako"));
INSERT INTO fav_location_joint (id_location, id_dog) VALUES ((SELECT id FROM location WHERE location_name = "Audubon Park"), (SELECT id FROM dog WHERE name = "Jared"));
INSERT INTO fav_location_joint (id_location, id_dog) VALUES ((SELECT id FROM location WHERE location_name = "Lafreniere Park"), (SELECT id FROM dog WHERE name = "Trigger"));


/* 
To use this file run:
	mysql -u root<server/db/initializeSchema.sql
	OR 
	mariadb -u root <~path to initializeSchema.sql~
You should run these commands only when:
	1. You first pull repo from upstream
	2. You make a change in the schemas 
*/
