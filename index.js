const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/template-helper.js');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let employeeArray = [];

// The user will answer the following questions
questions();

function questions() {
  inquirer.prompt(
    {
      type: 'list',
      name: 'employeeRole',
      message: 'Which role would you like to add to the team?',
      choices: [
        'Engineer',
        'Manager',
        'Intern',
        'I am finished with building my team.']
    })
    .then((response) => {
      if (response.employeeRole === 'Manager') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
          },
          {
            type: 'number',
            name: 'id',
            message: "What is the manager's employee ID?"
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
          },
          {
            type: 'number',
            name: 'officeNum',
            message: "What is the manager's office number?"
          },
        ])

          // Manager data is pushed into the array

          .then((response) => {
            const addManager = new Manager(response.name, response.id, response.email, response.officeNum)
            employeeArray.push(addManager);

            questions();
          });

      } else if (response.employeeRole === 'Engineer') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
          },
          {
            type: 'number',
            name: 'id',
            message: "What is the engineer's employee ID?"
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
          },
          {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?"
          },

          // Engineer data is pushed into the array

        ]).then(response => {
          const addEngineer = new Engineer(response.name, response.id, response.email, response.github)
          employeeArray.push(addEngineer);

          questions();
        });

      } else if (response.employeeRole === 'Intern') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
          },
          {
            type: 'number',
            name: 'id',
            message: "What is the intern's employee ID?"
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
          },
          {
            type: 'input',
            name: "school",
            message: "Where does the intern attend school?"
          },
        ])

          // Intern data is pushed into the array

          .then((response) => {
            const addIntern = new Intern(response.name, response.id, response.email, response.schoolName)
            employeeArray.push(addIntern);

            questions();
          });

      } else if (response.employeeRole === 'I am finished with building my team.') {
        const createHTML = generateHTML(employeeArray);
        fs.writeFile('./dist/team.html', createHTML, function (err) {
          if (err) throw err

          console.log('The HTML file has been created.')
        });
      }
    })
};
