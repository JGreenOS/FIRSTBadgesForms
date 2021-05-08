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
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR(20) PRIMARY KEY,
team_number INT
);

CREATE TABLE stu_req_records(
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(30), 
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

INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Wilma", "Flintstone", "tlinden@hotmail.com", 1023);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Julia", "Green", "burns@aol.com", 33);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Spider", "Man", "symbolic@live.com", 27);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Bat", "Man", "atmarks@optonline.com", 29);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Wonder", "Woman", "rnewman@outlook.com", 4381);
INSERT INTO mentor(first_name, last_name, email, team) VALUES ("Bugs", "Bunny", "eidac@live.com", 3537);

INSERT INTO requirements(badge_name) VALUES ("Electronics 1.1"); 
INSERT INTO requirements(badge_name) VALUES ("Electronics 1.2");
INSERT INTO requirements(badge_name) VALUES ("Electronics 1.3");
INSERT INTO requirements(badge_name) VALUES ("Electronics 1.4");
INSERT INTO requirements(badge_name) VALUES ("Electronics 1.5");
INSERT INTO requirements(badge_name) VALUES ("Electronics 2.1");
INSERT INTO requirements(badge_name) VALUES ("Electronics 2.2");
INSERT INTO requirements(badge_name) VALUES ("Electronics 2.3");
INSERT INTO requirements(badge_name) VALUES ("Electronics 2.4");
INSERT INTO requirements(badge_name) VALUES ("Electronics 2.5");
INSERT INTO requirements(badge_name) VALUES ("Leadership 1.1");
INSERT INTO requirements(badge_name) VALUES ("Leadership 1.2");
INSERT INTO requirements(badge_name) VALUES ("Leadership 1.3");
INSERT INTO requirements(badge_name) VALUES ("Leadership 1.4");
INSERT INTO requirements(badge_name) VALUES ("Leadership 1.5");
INSERT INTO requirements(badge_name) VALUES ("Leadership 2.1");
INSERT INTO requirements(badge_name) VALUES ("Leadership 2.2");
INSERT INTO requirements(badge_name) VALUES ("Leadership 2.3");
INSERT INTO requirements(badge_name) VALUES ("Leadership 2.4");
INSERT INTO requirements(badge_name) VALUES ("Leadership 2.5");
INSERT INTO requirements(badge_name) VALUES ("Participation 1");
INSERT INTO requirements(badge_name) VALUES ("Participation 2");

INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Allison", "Black", "aly@live.com", 1023);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Arjun", "Orange", "symbolic@live.com", 33);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Connor", "White", "overbom@yahoo.ca", 27);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Ethan", "Smith", "ilyaz@sbcglobal.net", 33);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Haley", "Williams", "cgarcia@hotmail.com", 1023);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Kyle", "Blue", "sabren@comcast.net", 27);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Lindsey", "Red", "dkeeler@live.com", 4381);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Mallory", "Purple", "jbailie@att.net", 1023);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Maxwell", "Magenta", "mahbub@att.net", 1023);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Olivia", "Pink", "stefano@comcast.net", 1023);
INSERT INTO student_info(first_name, last_name, email, team_number) VALUES ("Shelby", "Brown", "bryam@yahoo.com", 1023);

INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("aly@live.com", 1023, 1, "9/20/18");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("aly@live.com", 1023, 6, "9/20/18");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("symbolic@live.com", 33, 1, "2/15/16");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("ilyaz@sbcglobal.net", 1023, 1, "2/15/16");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("ilyaz@sbcglobal.net", 1023, 6, "2/15/16");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("cgarcia@hotmail.com", 1023, 21, "1/30/17");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("sabren@comcast.net", 27, 21, "2/2/17");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("dkeeler@live.com", 4381, 11, "9/20/18");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("jbailie@att.net", 4381, 1, "9/20/18");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("mahbub@att.net", 1023, 1, "9/20/16");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("mahbub@att.net", 1023, 6, "9/20/16");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("stefano@comcast.net", 1023, 1, "9/20/16");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("stefano@comcast.net", 1023, 21, "9/20/16");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("bryam@yahoo.com", 1023, 1, "9/20/16");
INSERT INTO stu_req_records(email, team_number, req_id, date_received) VALUES ("bryam@yahoo.com", 1023, 6, "9/20/16");
