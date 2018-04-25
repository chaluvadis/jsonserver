module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        profiles: _.times(20, (n) => {
            return {
                id: faker.random.number(1000, 2000),
                fname: faker.name.firstName(),
                lname: faker.name.lastName(),
                email: faker.internet.email(),
                pic: faker.image.avatar(),
                city: faker.address.city(),
                state: faker.address.stateAbbr(),
                zip: faker.address.zipCode(),
                country: faker.address.country(),
                code: faker.address.countryCode()
            }
        })
    }
}