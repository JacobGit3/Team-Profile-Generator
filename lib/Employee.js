// Basic Employee Class
class Employee {
  // Employee Constructor
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }
  // Methods to get Employee Data
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

// Export Employee Class
module.exports = Employee;