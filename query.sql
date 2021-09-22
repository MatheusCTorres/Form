create database company;
use company;

create table employee(
id int not null primary key,
name text(200) not null,
age int not null,
country text(200),
position text(200),
wage int
);