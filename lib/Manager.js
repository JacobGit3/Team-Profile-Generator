// Import Employee to build on the Constructor
const Employee = require('./Employee.js');

// Create Manager Class
class Manager extends Employee {
  // Manager Constructor
  constructor(name, email, id, officeNum) {
    super(name, email, id);
    this. officeNum = officeNum;
    this.role = 'Manager';
  }
  getOffice() {
    return this.officeNum;
  }
}

// Export manager class
module.exports = Manager;