DROP DATABASE IF EXISTS appointmentsDB;

CREATE DATABASE appointmentsDB;

USE appointmentsDB;

CREATE TABLE customer (
  id INT NOT NULL AUTO-INCREMENT,
  full_name NULL,
  phone_number NULL,
  email INT NULL,
  preffered_date NULL,
  zip_code INT NULL,
  PRIMARY KEY 
);

INSERT INTO customer (full_name, phone_number, email, preffered_date, zip_code)
VALUES ("Dwight Schrute", 5551112223, schrutefarms@mifflin.com, 2020-02-02, 90210);

INSERT INTO customer (full_name, phone_number, email, preffered_date, zip_code)
VALUES ("Michael Kelso", 5552223333, kelsorules@forman.com, 2020-02-02, 93456);


