// Import Employee Class to add to Constructor
const Employee = require('./Employee.js');

// Intern Class
class Intern extends Employee {
  // Intern Constructor
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
    this.role = 'Intern';
  }
}

// Export the Engineering Class
module.exports = Intern;