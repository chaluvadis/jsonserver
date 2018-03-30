module.exports = function() {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        assignments: _.times(10, (n) => {
            return {
                id: faker.random.number(1000, 2000),
                clientname: faker.name.jobTitle(),
                assignmentguid: faker.random.uuid(),
                questassignmentid: faker.random.number(100000, 999999).toString() + '-' + faker.random.number(1000, 9999).toString(),
                isActive: true,
                createdDate: faker.date.recent(),
            }
        })
    }
}