const Intern = require("../lib/Intern");

// Name, ID, email, and school

it("should create intern school", () => {
  const intern = new Intern('Xavier', 1015,'xvrteo@gmail.com', 'UC Berkeley');

  expect(intern.school).toEqual(expect.any(String));;
});

// From getSchool()

it("should get school", () => {
  const intern = new Intern('Xavier', 1015,'xvrteo@gmail.com', 'UC Berkeley');

  expect(intern.getSchool()).toEqual("UC Berkeley");;
});

// From getRole()

it('role of employee', () => {
  const intern = new Intern('Xavier', 1015,'xvrteo@gmail.com', 'UC Berkeley');

  expect(intern.getRole()).toEqual("Intern");
});
