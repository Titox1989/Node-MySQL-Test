--create database
CREATE DATABASE pruebanode;
--using the database
use pruebanode;

--creating a table

create table customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(10)
);

--SHOW TABLES
SHOW TABLES;

-- DESCRIBE CUSTOMER
DESCRIBE CUSTOMER;