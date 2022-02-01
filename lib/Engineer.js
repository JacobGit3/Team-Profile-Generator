// Import Employee Class to add to Constructor
const Employee = require('./Employee.js');

// Engineer Class
class Engineer extends Employee {
  // Engineer Constructor
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
    this.role = 'Engineer';
  }
  // new get github method
  getGithub() {
    return this.github;
  }
}

// Export the Engineering Class
module.exports = Engineer;