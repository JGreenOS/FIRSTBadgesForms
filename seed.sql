DROP DATABASE IF EXISTS vi4kwyfe18vtp6vf;

CREATE DATABASE vi4kwyfe18vtp6vf;

USE vi4kwyfe18vtp6vf;

CREATE TABLE mentor (
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR(30),
team INT(20) PRIMARY KEY
);

CREATE TABLE badge(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
badge_name VARCHAR(30)
);

CREATE TABLE students(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR(20),
team_number INT(20),
badge_id INT, 
INDEX badge_ind (badge_id),
CONSTRAINT fk_badge FOREIGN KEY (badge_id) REFERENCES badge(id) ON DELETE CASCADE,
CONSTRAINT FOREIGN KEY(team_number) REFERENCES mentor(team) ON DELETE CASCADE,
date_received VARCHAR(30)
);

INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Wilma", "Flintstone", "tlinden@hotmail.com", 1023);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Julia", "Green", "burns@aol.com", 33);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Spider", "Man", "symbolic@live.com", 27);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Bat", "Man", "atmarks@optonline.com", 29);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Wonder", "Woman", "rnewman@outlook.com", 4381);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Bugs", "Bunny", "eidac@live.com", 3537);

INSERT INTO badge(badge_name) VALUES ("Electronics 1.1");
INSERT INTO badge(badge_name) VALUES ("Electronics 1.2");
INSERT INTO badge(badge_name) VALUES ("Electronics 1.3");
INSERT INTO badge(badge_name) VALUES ("Electronics 1.4");
INSERT INTO badge(badge_name) VALUES ("Electronics 1.5");
INSERT INTO badge(badge_name) VALUES ("Electronics 2.1");
INSERT INTO badge(badge_name) VALUES ("Electronics 2.2");
INSERT INTO badge(badge_name) VALUES ("Electronics 2.3");
INSERT INTO badge(badge_name) VALUES ("Electronics 2.4");
INSERT INTO badge(badge_name) VALUES ("Electronics 2.5");
INSERT INTO badge(badge_name) VALUES ("Leadership 1.1");
INSERT INTO badge(badge_name) VALUES ("Leadership 1.2");
INSERT INTO badge(badge_name) VALUES ("Leadership 1.3");
INSERT INTO badge(badge_name) VALUES ("Leadership 1.4");
INSERT INTO badge(badge_name) VALUES ("Leadership 1.5");
INSERT INTO badge(badge_name) VALUES ("Leadership 2.1");
INSERT INTO badge(badge_name) VALUES ("Leadership 2.2");
INSERT INTO badge(badge_name) VALUES ("Leadership 2.3");
INSERT INTO badge(badge_name) VALUES ("Leadership 2.4");
INSERT INTO badge(badge_name) VALUES ("Leadership 2.5");
INSERT INTO badge(badge_name) VALUES ("Participation 1");
INSERT INTO badge(badge_name) VALUES ("Participation 2");




INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Allison", "Black", "aly@live.com", 1023, 1, "9/20/18");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Allison", "Black", "aly@live.com", 1023, 6, "9/20/18");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Arjun", "Orange", "symbolic@live.com", 33, 1, "2/5/16");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Connor", "White", "overbom@yahoo.ca", 27, 1, "1/14/17");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Ethan", "Smith", "ilyaz@sbcglobal.net", 1023, 1, "2/2/16");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Ethan", "Smith", "ilyaz@sbcglobal.net", 1023, 6, "2/2/16");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Haley", "Williams", "cgarcia@hotmail.com", 33, 21, "1/30/17");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Kyle", "Blue", "sabren@comcast.net", 27, 21, "2/12/17");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Lindsey", "Red", "dkeeler@live.com", 4381, 11, "9/20/18");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Mallory", "Purple", "jbailie@att.net", 1023, 1, "9/20/18");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Maxwell", "Magenta", "mahbub@att.net", 1023, 6, "9/20/16");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Maxwell", "Magenta", "mahbub@att.net", 1023, 1, "9/20/16");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Olivia", "Pink", "stefano@comcast.net", 1023, 16, "9/20/16");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Olivia", "Pink", "stefano@comcast.net", 1023, 1, "9/20/18");
INSERT INTO students(first_name, last_name, email, team_number, badge_id, date_received) VALUES ("Shelby", "Brown", "bryam@yahoo.com", 1023, 1, "2/2/16");

SELECT students.first_name, students.last_name, badge.id, mentor.team FROM students LEFT JOIN badge on students.badge_id = badge.id LEFT JOIN mentor on mentor.team = students.team_number LIMIT 0, 1000;
