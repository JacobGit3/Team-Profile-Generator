const manager = [
  {
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'int',
    name: 'id',
    message: 'What is your Employee ID?'
  },
  {
    type: 'text',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'int',
    name: 'office',
    message: 'What is your office number?'
  }
]

const team = [
  {
    type: 'confirm',
    name: 'addMember',
    message: 'Would you like to add a team member?',
    default: true
  },
  {
    type: 'list',
    name: 'role',
    message: 'What type of team member would you like to add?',
    choices: ['Engineer', 'Intern'],
    when: ({ addMember }) => addMember
  }
]

const engineer = [
  {
    type: 'text',
    name: 'name',
    message: "What is the Engineer's Name?"
  },
  {
    type: 'int',
    name: 'id',
    message: "What is the Engineer's Employee ID?"
  },
  {
    type: 'text',
    name: 'email',
    message: "What is the Engineer's Email?"
  },
  {
    type: 'text',
    name: 'github',
    message: "What is the Engineer's Github Username?"
  }
]

const intern = [
  {
    type: 'text',
    name: 'name',
    message: "What is the Intern's Name?"
  },
  {
    type: 'int',
    name: 'id',
    message: "What is the Intern's Employee ID?"
  },
  {
    type: 'text',
    name: 'email',
    message: "What is the Intern's Email?"
  },
  {
    type: 'text',
    name: 'school',
    message: "What is the Intern's School name?"
  }
]

const finish = [
  {
    type: 'confirm',
    name: 'finish',
    message: "Are you finished creating your team?"
  }
]

module.exports = {
  manager,
  team,
  engineer,
  intern,
  finish
}