module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        quiz: {
            id: faker.random.uuid(),
            title: "Know more about UAE",
            quizid: faker.random.alphaNumeric(8),
            groupid: faker.random.uuid(),
            language: "english",
            questions: [{
                id: faker.random.uuid(),
                title: "What is the fullform of UAE?",
                type: "text",
                length: 500,
            }, {
                id: faker.random.uuid(),
                title: "What is the capital of UAE?",
                type: "radio",
                answers: [{
                    id: 1,
                    title: "Abu Dhabi"
                }, {
                    id: 2,
                    title: "Dubai"
                }, {
                    id: 3,
                    title: "Sharjah"
                }]
            }, {
                id: faker.random.uuid(),
                title: "Who is the founder of UAE?",
                type: "text",
                length: 500,
            }, {
                id: faker.random.uuid(),
                title: "When the UAE is formed?",
                type: "radio",
                answers: [{
                    id: 1,
                    title: "Jan 21 1974"
                }, {
                    id: 2,
                    title: "Dec 2 1971"
                }, {
                    id: 3,
                    title: "Feb 23 1984"
                }]
            }, {
                id: faker.random.uuid(),
                title: "Choose the best tourist places to visit in UAE?",
                type: "check",
                answers: [{
                    id: 1,
                    title: "Abu Dhabi"
                }, {
                    id: 2,
                    title: "Dubai"
                }, {
                    id: 3,
                    title: "Sharjah"
                }, {
                    id: 4,
                    title: "All the above"
                }]
            }, {
                id: faker.random.uuid(),
                title: "Free text?",
                type: "text",
            }]
        }
    };
}