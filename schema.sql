
-- created database for company
CREATE DATABASE company; 

USE company;

-- created a table for the department. 
-- id has unique value, there cannot be duplicated values. 
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    --name must have no more than 30 characters, and cannot be NULL
    name VARCHAR(30) NOT NULL
);

--role table, Title no more than 30 characters, salary must be numerical(decimal)
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2),
    --role n department integer val to join 
    department_id INT, 
    --the department id in the role table must exist in the department table's id column. (connecting the tables)
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    --first n last name, no more than 30 characters again 
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    --role n manager given depending on integer
    roleid INT,
    managerid INT,
    --the integer in roleid refers to the roles table
    FOREIGN KEY (roleid) REFERENCES roles(id),
    --this does the same, but if the person is a manager in this employee section
    FOREIGN KEY(managerid)
)