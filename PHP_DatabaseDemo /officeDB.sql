drop database if exists officeDB;
create database if not exists officeDB;
use officeDB;

CREATE TABLE employees(
	id int(5) primary key AUTO_INCREMENT,
	fName char(50),
	lName char(50),
	position ENUM("Sales","Management","Accounting","Reception","HR")
);

INSERT INTO employees(fName, lName, position)
VALUES
("Jim","Halpert","Sales"),
("Pam","Halpert","Sales"),
("Michael","Scott","Management"),
("Dwight","Schrute","Sales"),
("Toby","Flenderson","Human Resources"),
("Oscar","","Accounting"),
("Kevin","Malone","Accounting");
