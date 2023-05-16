-- seeds.sql

-- Departments
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Finance');
INSERT INTO departments (name) VALUES ('Human Resources');

-- Roles
INSERT INTO roles (title, salary, department_id) VALUES ('Sales Manager', 60000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Sales Representative', 40000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Marketing Manager', 55000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Marketing Coordinator', 35000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Finance Manager', 70000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Finance Analyst', 50000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('HR Manager', 65000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('HR Specialist', 45000, 4);

-- Employees
INSERT INTO employees (firstname, lastname, roleid, managerid) VALUES ('Charli', 'Pollard', 1, 1);
INSERT INTO employees (firstname, lastname, roleid, managerid) VALUES ('Will', 'Parkyn', 2, NULL);
INSERT INTO employees (firstname, lastname, roleid, managerid) VALUES ('Jack', 'Rawlings', 3, 1);
INSERT INTO employees (firstname, lastname, roleid, managerid) VALUES ('Tam', 'Sferco', 4, NULL);
