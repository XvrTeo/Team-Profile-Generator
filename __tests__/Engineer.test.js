const Engineer = require("../lib/Engineer");

// Name, ID, email, and GitHub username

it("should create engineer github", () => {
  const engineer = new Engineer('Xavier', 1015, 'xvrteo@gmail.com', 'XvrTeo');

  expect(engineer.getGithub()).toEqual('XvrTeo');
});

// From getGithubUser()

it("should get github username", () => {
  const engineer = new Engineer('Xavier', 1015, 'xvrteo@gmail.com', 'XvrTeo');

  expect(engineer.getGithub()).toEqual('XvrTeo');
});

// From getRole()

it('should get employee role', () => {
  const engineer = new Engineer('Xavier', 1015, 'xvrteo@gmail.com', 'XvrTeo');

  expect(engineer.getRole()).toEqual("Engineer");
});
