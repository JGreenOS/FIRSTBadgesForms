DROP DATABASE IF EXISTS vi4kwyfe18vtp6vf;

CREATE DATABASE vi4kwyfe18vtp6vf;

USE vi4kwyfe18vtp6vf;

CREATE TABLE mentor (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR(30), 
team_number INT(20), 
INDEX team_number_index (team_number)
);

CREATE TABLE requirements(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
badge_name VARCHAR(30)
);

CREATE TABLE student_info(
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR(20) PRIMARY KEY,
INDEX email_index (email),
team_number INT,
CONSTRAINT team_number_fk FOREIGN KEY(team_number) REFERENCES mentor(team_number) ON DELETE CASCADE
);

CREATE TABLE stu_req_records(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(30), 
req_id INT,
req_id_complete BOOLEAN NOT NULL DEFAULT 0,
CONSTRAINT email_fk FOREIGN KEY(email) REFERENCES student_info(email) ON DELETE CASCADE,
date_received VARCHAR(30)
);

-- SELECT student_info.first_name, student_info.last_name, stu_req_records.req_id, mentor.team_number 
-- FROM student_info
-- JOIN mentor
-- ON mentor.team_number = student_info.team_number;

-- USE vi4kwyfe18vtp6vf;

-- SELECT student_info.first_name, student_info.last_name, req_id, student_info.team_number
-- FROM stu_req_records
-- INNER JOIN student_info ON stu_req_records.email=student_info.email
-- INNER JOIN mentor ON student_info.team_number=mentor.team_number;

-- SELECT mentor.team, mentor.first_name AS Mentor_First_Name, mentor.last_name AS Mentor_Last_Name, students.first_name AS Student_First_name, students.last_name AS Student_Last_Name;
-- FROM mentor
-- JOIN students
-- ON students.team_number = mentor.team
-- WHERE mentor.team = 1023;

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

INSERT INTO mentor(first_name, last_name, email, team_number) VALUES ("Wilma", "Flintstone", "tlinden@hotmail.com", 1023);
INSERT INTO mentor(first_name, last_name, email, team_number) VALUES ("Julia", "Green", "burns@aol.com", 33);
INSERT INTO mentor(first_name, last_name, email, team_number) VALUES ("Spider", "Man", "symbolic@live.com", 27);
INSERT INTO mentor(first_name, last_name, email, team_number) VALUES ("Bat", "Man", "atmarks@optonline.com", 29);
INSERT INTO mentor(first_name, last_name, email, team_number) VALUES ("Wonder", "Woman", "rnewman@outlook.com", 4381);
INSERT INTO mentor(first_name, last_name, email, team_number) VALUES ("Bugs", "Bunny", "eidac@live.com", 3537);

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

INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Allison", "Black", "aly@live.com", 1023);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Arjun", "Orange", "symbolic@live.com", 33);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Connor", "White", "overbom@yahoo.ca", 27);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Ethan", "Smith", "ilyaz@sbcglobal.net", 33);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Haley", "Williams", "cgarcia@hotmail.com", 1023);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Kyle", "Blue", "sabren@comcast.net", 27);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Lindsey", "Red", "dkeeler@live.com", 4381);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Mallory", "Purple", "jbailie@att.net", 1023);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Maxwell", "Magenta", "mahbub@att.net", 1023);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Olivia", "Pink", "stefano@comcast.net", 1023);
INSERT INTO studentinfo(first_name, last_name, email, team_number) VALUES ("Shelby", "Brown", "bryam@yahoo.com", 1023);

INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("aly@live.com", 1, "9/20/18");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("aly@live.com", 6, "9/20/18");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("symbolic@live.com", 1, "2/15/16");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("ilyaz@sbcglobal.net", 1, "2/15/16");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("ilyaz@sbcglobal.net", 6, "2/15/16");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("cgarcia@hotmail.com",  21, "1/30/17");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("sabren@comcast.net", 21, "2/2/17");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("dkeeler@live.com", 11, "9/20/18");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("jbailie@att.net", 1, "9/20/18");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("mahbub@att.net", 1, "9/20/16");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("mahbub@att.net", 6, "9/20/16");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("stefano@comcast.net", 1, "9/20/16");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("stefano@comcast.net", 21, "9/20/16");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("bryam@yahoo.com", 1, "9/20/16");
INSERT INTO studentreqrecords(email, req_id, date_received) VALUES ("bryam@yahoo.com", 6, "9/20/16");









