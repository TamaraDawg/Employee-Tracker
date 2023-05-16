const inquirer = require('inquirer');
console.log('code running');

//this isn't working.
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