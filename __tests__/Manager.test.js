// Require manager class to test class
const Manager = require('../lib/Manager.js');

// Test the class
test('creates and manager object', () => {
  // Create manager Object
  const manager = new Manager('testName', 0, 'test@email', 1);

  // check the object and verify
  expect(manager.name).toBe('testName');
  expect(manager.email).toBe('test@email');
  expect(manager.role).toBe('Manager');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.officeNum).toEqual(expect.any(Number));
  expect(manager.id).toEqual(0);
  expect(manager.officeNum).toEqual(1);
});

test("gets manager name, id, email, and role, using included methods", () => {
  // Create manager Object
  const manager = new Manager('testName', 0, 'test@email', 1);

  // Test object methods 
  expect(manager.getName()).toEqual(expect.stringContaining('testName'));
  expect(manager.getId()).toEqual(expect.any(Number));
  expect(manager.getId()).toEqual(0);
  expect(manager.getEmail()).toEqual(expect.stringContaining('test@email'));  
  expect(manager.getRole()).toBe('Manager');
  expect(manager.getOffice()).toEqual(expect.any(Number));
  expect(manager.getOffice()).toEqual(1);
});