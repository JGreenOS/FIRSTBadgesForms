DROP DATABASE IF EXISTS vi4kwyfe18vtp6vf;

CREATE DATABASE vi4kwyfe18vtp6vf;

USE vi4kwyfe18vtp6vf;

CREATE TABLE mentor (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR(30),
team INT(20) 
);

CREATE TABLE requirements(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
badge_name VARCHAR(30)
);

CREATE TABLE student_info(
id INT NOT NULL,
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR(20) PRIMARY KEY,
team_number INT
);

CREATE TABLE stu_req_records(
id INT NOT NULL,
email VARCHAR(30) PRIMARY KEY,
team_number INT,
req_id INT,
-- INDEX team_num_ind (team_number),
-- INDEX req_ind (req_id),
-- CONSTRAINT team_num_ind FOREIGN KEY(team_number) REFERENCES mentor(team) ON DELETE CASCADE,
-- CONSTRAINT req_ind FOREIGN KEY (req_id) REFERENCES requirements(id) ON DELETE CASCADE,
date_received VARCHAR(30)
);

CREATE TABLE badge (
id INT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
email VARCHAR(30) PRIMARY KEY,
electronics_one_completed BOOLEAN ,
electronics_two_completed BOOLEAN , 
leadership_one_completed BOOLEAN,
leadership_two_completed BOOLEAN,
participation_one_completed BOOLEAN,
participation_two_completed BOOLEAN
);