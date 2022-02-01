// Require intern class to test class
const Intern = require('../lib/Intern.js');

// Test the class
test('creates and intern object', () => {
  // Create intern Object
  const intern = new Intern('testName', 0, 'test@email', 'testSchool');

  // check the object and verify
  expect(intern.name).toBe('testName');
  expect(intern.email).toBe('test@email');
  expect(intern.role).toBe('Intern');
  expect(intern.id).toEqual(0);
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.school).toBe('testSchool');
});

test("gets intern name, id, email, and role, using included methods", () => {
  // Create intern Object
  const intern = new Intern('testName', 0, 'test@email', 'testSchool');

  // Test object methods 
  expect(intern.getName()).toEqual(expect.stringContaining('testName'));
  expect(intern.getId()).toEqual(expect.any(Number));
  expect(intern.getId()).toEqual(0);
  expect(intern.getEmail()).toEqual(expect.stringContaining('test@email'));  
  expect(intern.getRole()).toBe('Intern');
  expect(intern.getSchool()).toBe('testSchool');
});