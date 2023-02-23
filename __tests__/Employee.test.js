const Employee = require("../lib/Employee");

// Create employee object

it("should create an employee object", () => {
  const employee = new Employee('Xavier', 1015,'xvrteo@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// From getName()

it('should get employee name', () => {
  const employee = new Employee('Xavier', 1015,'xvrteo@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// From getId()

it('should get employee id', () => {
  const employee = new Employee('Xavier', 1015,'xvrteo@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// From getEmail()

it('should get employee email', () => {
  const employee = new Employee('Xavier', 1015,'xvrteo@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// From getRole()

it('should get employee role', () => {
  const employee = new Employee('Xavier', 1015,'xvrteo@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
});
