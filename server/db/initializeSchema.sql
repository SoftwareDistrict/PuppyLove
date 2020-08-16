DROP DATABASE IF EXISTS puppy_love;

CREATE DATABASE puppy_love;

USE puppy_love;

CREATE TABLE IF NOT EXISTS Users(
	id INT NOT NULL AUTO_INCREMENT,
	username TEXT,
	email TEXT NOT NULL,
	cell TEXT,
	latitude DECIMAL,
	longitude DECIMAL,
	home_town TEXT,
	googleId VARCHAR(220) NOT NULL UNIQUE,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Dogs(
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
	FOREIGN KEY(id_user) REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Locations(
	id INT NOT NULL AUTO_INCREMENT,
	location_name TEXT NOT NULL,
	latitude DECIMAL NOT NULL,
	longitude DECIMAL NOT NULL,
	description TEXT NOT NULL,
	image_url TEXT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Friend_joint(
	id_dog INT NOT NULL,
	id_dogFriend INT NOT NULL,
	bool_friend TINYINT(1) NOT NULL,
	FOREIGN KEY(id_dog) REFERENCES Dogs(id),
	FOREIGN KEY(id_dogFriend) REFERENCES Dogs(id)
);

-- USER (all lat/long and home_lat/home_long are set to New Orleans)
-- INSERT INTO Users (username, email, cell, latitude, longitude, home_town, googleId) VALUES ();
INSERT INTO Users
  (username, email, cell, latitude, longitude, home_town, googleId)
VALUES
  ("Tyler", "tyler@gamil.com", "(985)-123-4567", "29.9511", "90.0715", "New Orleans", "1");
INSERT INTO Users
    (username, email, cell, latitude, longitude, home_town, googleId)
VALUES
  ("Zoey", "zoey@gmail.com", "(985)-123-4567", "29.9511", "90.0715", "New Orleans", "2");
INSERT INTO Users
    (username, email, cell, latitude, longitude, home_town, googleId)
VALUES
  ("John", "john@gmail.com", "(985)-123-4567", "29.9511", "90.0715", "New Orleans", "3");
INSERT INTO Users
    (username, email, cell, latitude, longitude, home_town, googleId)
VALUES
  ("Timmy", "timmy@gmail.com", "(985)-123-4567", "29.9511", "90.0715", "New Orleans", "4");
INSERT INTO Users
    (username, email, cell, latitude, longitude, home_town, googleId)
VALUES
  ("Ashley", "ashley@gmail.com", "(985)-123-4567", "29.9511", "90.0715", "New Orleans", "5");
-- DOG (true is 1 and false is 0)
-- INSERT INTO Dogs (name, breed, weight, age, fixed, description, image, id_user) VALUES ((SELECT id FROM user WHERE username = ));
INSERT INTO Dogs
  (dog_name, breed, weight, age, fixed, description, image, id_user)
VALUES
  ("Chester", "Golden Lab", "12", "6", "1", "Just a baby.", "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg", (SELECT id FROM Users WHERE username = "Tyler"));
INSERT INTO Dogs
  (dog_name, breed, weight, age, fixed, description, image, id_user)
VALUES
  ("Alfred", "Golden Lab", "68", "3", "1", "Big brother.", "https://tinyurl.com/y2czcnb2", (SELECT id FROM Users WHERE username = "Tyler"));
INSERT INTO Dogs
  (dog_name, breed, weight, age, fixed, description, image, id_user)
VALUES
  ("Jared", "Pomeranian", "19", "4", "1", "He is a joker.", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQItDJF0FPk3zsXOxm8XHFA8wm1De8S1uPwQA&usqp=CAU", (SELECT id FROM Users WHERE username = "Zoey"));
INSERT INTO Dogs
  (dog_name, breed, weight, age, fixed, description, image, id_user)
VALUES
  ("Dante", "Pug", "24", "7", "1", "Breathing problems.", "https://tinyurl.com/y3pjsd3l", (SELECT id FROM Users WHERE username = "John"));
INSERT INTO Dogs
  (dog_name, breed, weight, age, fixed, description, image, id_user)
VALUES
  ("Scarlet", "Australian Shepherd", "52", "6", "1", "Beautiful soul.", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuefDhFZpW9NljnOWYJEZsWYK4FztlxEgCEw&usqp=CAU", (SELECT id FROM Users WHERE username = "Ashley"));
INSERT INTO Dogs
  (dog_name, breed, weight, age, fixed, description, image, id_user)
VALUES
  ("Mako", "Dalmatian", "47", "2", "0", "Majestic.", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizakGYU46I9rz6-rv0JtruPgyy89YJWJtSg&usqp=CAU", (SELECT id FROM Users WHERE username = "Timmy"));
INSERT INTO Dogs
  (dog_name, breed, weight, age, fixed, description, image, id_user)
VALUES
  ("Trigger", "Black Lab", "52", "2", "1", "Very smart and protective, also a great tracker.", "https://tinyurl.com/y2ch5jcd", (SELECT id FROM Users WHERE username = "Timmy"));
-- LOCATION
-- INSERT INTO Location (location_name, latitude, longitude, description, image_url) VALUES ();
INSERT INTO Locations
  (location_name, latitude, longitude, description, image_url)
VALUES
  ("City Park", "30.0038", "90.0972", "Massive park with plenty of parking.", "https://tinyurl.com/yxpk9f74");
INSERT INTO Locations
  (location_name, latitude, longitude, description, image_url)
VALUES
  ("Lafreniere Park", "29.9985", "90.2148", "Big park with plenty of fields. And it's right on the water!", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSML1dn3kjKOTBCjH8wsXnzH2lh20c9HKPjXA&usqp=CAU");
INSERT INTO Locations
  (location_name, latitude, longitude, description, image_url)
VALUES
  ("Audubon Park", "29.9341", "90.1239", "Beutiful and safe area with plenty of shade.", "https://tinyurl.com/y6bysr43");
-- FRIENDS (true is 1 and false is 0)
-- INSERT INTO Friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM dog WHERE name = ), (SELECT id FROM dog WHERE name = ),);
INSERT INTO Friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM Dogs WHERE dog_name = "Chester"), (SELECT id FROM Dogs WHERE dog_name = "Jared"), "0");
INSERT INTO Friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM Dogs WHERE dog_name = "Alfred"), (SELECT id FROM Dogs WHERE dog_name = "Mako"), "0");
INSERT INTO Friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM Dogs WHERE dog_name = "Alfred"), (SELECT id FROM Dogs WHERE dog_name = "Trigger"), "0");
INSERT INTO Friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM Dogs WHERE dog_name = "Mako"), (SELECT id FROM Dogs WHERE dog_name = "Scarlet"), "0");
INSERT INTO Friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM Dogs WHERE dog_name = "Jared"), (SELECT id FROM Dogs WHERE dog_name = "Dante"), "0");

/* 
To use this file run:
	mysql -u root<server/db/initializeSchema.sql
	OR 
	mariadb -u root <~path to initializeSchema.sql~
You should run these commands only when:
	1. You first pull repo from upstream
	2. You make a change in the schemas 
*/
