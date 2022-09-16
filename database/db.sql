-- Creating Database

CREATE DATABASE pendientesapp;

-- Using the database

USE pendientesapp;

-- Creating a table

CREATE TABLE pendientes (
  id INT NOT NULL auto_increment,
  title VARCHAR(60) NOT NULL,
  description VARCHAR(300) NOT NULL,
  done BOOLEAN NOT NULL DEFAULT 0,
  finishDate DATE NOT NULL,
  initialDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- Show all tables

SHOW TABLES;

-- To describe the table

DESCRIBE pendientes;