const Manager = require("../lib/Manager");

// Name, ID, email, and office number

it("should create manager officeNumber", () => {
  const manager = new Manager('Xavier', 1015,'xvrteo@gmail.com', 9251234567);

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

// From getRole()

it('should get employee role', () => {
  const manager = new Manager('Xavier', 1015,'xvrteo@gmail.com', 9251234567);

  expect(manager.getRole()).toEqual("Manager");
});
