// Require Employee class to test class
const Employee = require('../lib/Employee.js');

// Test the class
test('creates and employee object', () => {
  // Create Employee Object
  const employee = new Employee('testName', 0, 'test@email');

  // check the object and verify
  expect(employee.name).toBe('testName');
  expect(employee.email).toBe('test@email');
  expect(employee.id).toEqual(0);
  expect(employee.role).toBe('Employee');
  expect(employee.id).toEqual(expect.any(Number));
});

test("gets employee name, id, email, and role, using included methods", () => {
  // Create Employee Object
  const employee = new Employee('testName', 0, 'test@email');

  // Test object methods 
  expect(employee.getName()).toEqual(expect.stringContaining('testName'));
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getId()).toEqual(0);
  expect(employee.getEmail()).toEqual(expect.stringContaining('test@email'));
  expect(employee.getRole()).toBe('Employee')
});