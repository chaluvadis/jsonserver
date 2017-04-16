module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        task: _.times(10, (n) => {
            return {
                id: n + 1,
                title: faker.company.companyName(),
                status: faker.random.arrayElement(["pending", "done", "offline"])
            }
        })
    }
}