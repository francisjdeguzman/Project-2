
DROP DATABASE IF EXISTS `barber_db`;
CREATE DATABASE `barber_db`;
USE `barber_db`;
CREATE TABLE `customers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`first_name` VARCHAR( 255) NOT NULL,
	`last_name` VARCHAR( 255 ) NOT NULL,
	`phone_number` Int(11) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);

CREATE TABLE `appointments` (
	`id` INT(11) AUTO_INCREMENT NOT NULL,
	`customer_id` INT NOT NULL,
	`time` varchar(255) NOT NULL,
	`date` DATE NOT NULL,
	`service_id` INT NOT NULL,
	`location` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);
CREATE TABLE `services` (
	`id` INT(11) AUTO_INCREMENT NOT NULL,
	`service` varchar(255) NOT NULL,
	`rate` DECIMAL NOT NULL,
	PRIMARY KEY (`id`)
);
