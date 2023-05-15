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
        
      });
  }
  