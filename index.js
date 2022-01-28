// Importing constructors, questions, and inquire
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js')
const Intern = require ('./lib/Intern.js')
const inquirer = require('inquirer');
const Questions = require ('./dist/Questions.js');
const Generate = require('./src/GeneratePage.js')

//Global Variables
let team = []

// Creates a Manager, Ran on load
function CreateManager() {
  // Prompts with questions for profile data
  inquirer.prompt(Questions.manager)
    .then(function newEmployee(data){
      // Creates manager using Manager Constructor
      let newManager = new Manager(data.name, data.id, data.email, data.office);
      team.push(newManager);
      CreateTeam();
    })
}

// After Manager is created Team options are displayed
function CreateTeam() {
  // Prompts with options to add members or complete file
  inquirer.prompt(Questions.team)
    .then(function choice(data){
      // If chosen to add member, run function for associated role desired
      if (data.addMember){
        if (data.role === 'Engineer'){
          CreateEngineer()
        }else if (data.role === 'Intern'){
          CreateIntern()
        }else {
          console.log('Error')
        }
      }
      // If chosen no to add member the team is complete, create HTML
      else if(!data.addMember){
        // FIX THIS IT DOES NOT RUN
        generateHTML(team);
      }else {
        console.log('error');
      }
    })
}

// Creates an Engineer Profile
function CreateEngineer() {
  inquirer.prompt(Questions.engineer)
    .then(function makeEngineer(data){
      let newEngineer = new Engineer(data.name, data.id, data.email, data.github);
      team.push(newEngineer);
      CreateTeam();
    })
}

// Creates an Intern Profile
function CreateIntern() {
  inquirer.prompt(Questions.intern)
  .then(function makeIntern(data){
    let newIntern = new Intern(data.name, data.id, data.email, data.school);
    team.push(newIntern);
    CreateTeam();
  })
}

// Ran on load to start team generator
CreateManager()