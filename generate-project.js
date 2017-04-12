module.exports = function(){
    var faker = require('faker');
    var _ = require('lodash');
    return {
       project : _.times(10, (n)=>{
            return {
                id: n,
                title: faker.company.companyName(),
                country : faker.address.country(),
                budget: faker.finance.amount(),
                phone: faker.phone.phoneNumber(),
                area: faker.name.jobArea()
            }
        })
    }
}