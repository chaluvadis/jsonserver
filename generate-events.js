module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');
    var moment = require('moment');
    var date = moment().date();
    return {
        events: _.times(20, (n) => {
            return {
                id: n + 1,
                title: "Event " + (n+1).toString(),
                description: faker.lorem.paragraph(),
                allDay:false,
                start: moment(new Date()).add(n, 'd'),
                end: moment(new Date()).add(n, 'd').add(1,'h'),
                stick: true
            }
        })
    }
}