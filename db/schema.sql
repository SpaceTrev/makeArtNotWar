DROP DATABASE IF EXISTS contractor_db;
CREATE DATABASE contractor_db;

USE contractor_db;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(45) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  avatar VARCHAR(150),
  PRIMARY KEY (id)
);

CREATE TABLE alljobs(
  id INT NOT NULL AUTO_INCREMENT,
  createdby VARCHAR(20) NOT NULL,  --should be id from users table
  assignedto VARCHAR(20),  --should be id from users table
  description VARCHAR(300) NOT NULL,
  done BOOLEAN NOT NULL DEFAULT false,
  address VARCHAR(100) NOT NULL,
  cost DECIMAL(7,2) NOT NULL, 
  PRIMARY KEY (id)
);

