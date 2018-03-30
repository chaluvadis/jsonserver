module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        employees: _.times(20, (n) => {
            return {
                id: faker.random.number(1000, 2000),
                fname: faker.name.firstName(),
                lname: faker.name.lastName(),
                email: faker.internet.email(),
                address: {
                    street: faker.address.streetName(),
                    streetAddres: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    country: faker.address.country(),
                    code: faker.address.countryCode(),
                    zipcode: faker.address.zipCode()
                }
            }
        })
    }
}