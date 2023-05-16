const inquirer = require('inquirer');
console.log('code running');
require('dotenv').config();
const mysql = require('mysql');

//connection 
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE


})

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database!');

//this is working.
function mainMenu() {
  console.log('mainmenu started to run')
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      }
    ])
    .then((answers) => {
      switch (answers.option) {
        case 'View all departments':
          departments();
          break;
        case 'View all roles':
          roles();
          break;
        case 'View all employees':
          employees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployee()
          break;
        case 'Exit':
          console.log('Exiting...');
          process.exit();
          break;
        default:
          console.log('Invalid option selected.');
          break;
      }
    });
}


mainMenu();

function departments() {
   

  connection.query('SELECT * FROM departments', (error, results) => {
      if (error) {
        console.error('Error retrieving departments:', error);
        return;
      }
  
      console.log('All Departments:');
      results.forEach((department) => {
        console.log(`ID: ${department.id} | Name: ${department.name}`);
      });
  
      mainMenu();
    });
  
  
  
}
})
