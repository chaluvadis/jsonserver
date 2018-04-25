module.exports = function() {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    speakers: _.times(100, n => {
      var firstName = faker.name.firstName(),
        lastName = faker.name.lastName(),
        suffix = faker.name.suffix();
      return {
        id: faker.random.number(1000, 2000),
        firstName: firstName,
        lastName: lastName,
        suffix: suffix,
        fullName: suffix + ". " + firstName + " " + lastName,
        email: lastName + "." + firstName + "@speakers.com",
        expertsIn: [
          {
            id: 1,
            exprets: faker.random.arrayElement([
              "JavaScript",
              "TypeScript",
              "CoffeeScript"
            ])
          },
          {
            id: 2,
            exprets: faker.random.arrayElement([
              "Web Application",
              "Mobile Applications",
              "Single Page Application"
            ])
          },
          {
            id: 3,
            exprets: faker.random.arrayElement([
              "c#",
              "Asp.Net",
              "Asp.Net Core"
            ])
          }
        ],
        city: faker.address.city(),
        state: faker.address.state(),
        profile: faker.image.avatar()
      };
    })
  };
};
