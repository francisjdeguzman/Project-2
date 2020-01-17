DROP DATABASE IF EXISTS barber_db;

CREATE DATABASE barber_db;
​
USE barber_db;
​
DROP TABLE IF EXISTS `appointments`;
DROP TABLE IF EXISTS `services`;
DROP TABLE IF EXISTS `customers`;
DROP TABLE IF EXISTS `barbers`;
​
​
CREATE TABLE `barbers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`phone_number` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);
​
CREATE TABLE `appointments` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`barber_id` INT NOT NULL,
	`customer_id` INT NOT NULL,
	`time` varchar(255) NOT NULL,
	`date` DATE NOT NULL,
	`service_id` INT NOT NULL,
	`location` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);
​
CREATE TABLE `services` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`rate` DECIMAL NOT NULL,
	PRIMARY KEY (`id`)
);
​
CREATE TABLE `customers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`phone_number` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);
​
ALTER TABLE `appointments` ADD CONSTRAINT `appointments_fk0` FOREIGN KEY (`barber_id`) REFERENCES `barbers`(`id`);
​
ALTER TABLE `appointments` ADD CONSTRAINT `appointments_fk1` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`);
​
ALTER TABLE `appointments` ADD CONSTRAINT `appointments_fk2` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`);
