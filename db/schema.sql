DROP DATABASE IF EXISTS memes_db;
CREATE DATABASE memes_db;

USE memes_db;
CREATE TABLE memes(
    id INT NOT NULL auto_increment PRIMARY KEY,
    image VARCHAR(60) NOT NULL
);
