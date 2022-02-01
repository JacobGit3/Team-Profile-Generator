// Require Engineer class to test class
const Engineer = require('../lib/Engineer.js');

// Test the class
test('creates and engineer object', () => {
  // Create engineer Object
  const engineer = new Engineer('testName', 0, 'test@email', 'testGit');

  // check the object and verify
  expect(engineer.name).toBe('testName');
  expect(engineer.email).toBe('test@email');
  expect(engineer.role).toBe('Engineer');
  expect(engineer.id).toEqual(0);
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.github).toBe('testGit');
});

test("gets engineer name, id, email, and role, using included methods", () => {
  // Create engineer Object
  const engineer = new Engineer('testName', 0, 'test@email', 'testGit');

  // Test object methods 
  expect(engineer.getName()).toEqual(expect.stringContaining('testName'));
  expect(engineer.getId()).toEqual(expect.any(Number));
  expect(engineer.getId()).toEqual(0);
  expect(engineer.getEmail()).toEqual(expect.stringContaining('test@email'));  
  expect(engineer.getRole()).toBe('Engineer');
  expect(engineer.getGithub()).toBe('testGit');
});