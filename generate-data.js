
module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    var moment = require('moment');
    return {
        custom: _.times(20, (n) => {
            return {
                id: n + 1,
                title: 'Custom - ' + faker.lorem.sentence(5, 5),
                start: moment(new Date()).add(n, 'd'),
                active: true
            };
        }),
        emp: _.times(20, (n) => {
            return {
                id: n + 1,
                title: 'Employee - ' + faker.lorem.sentence(5, 5),
                start: moment(new Date()).add(n, 'd'),
                active: true
            };
        }),
    };
};