module.exports = function() {
    var assignments = require('./data/assignments.json');
    var times = require('lodash/times');
    return {
        sitedetails: times(10, (n) => {
            return {
                id: assignments[n].id,
                clientname: assignments[n].clientname,
                assignmentguid: assignments[n].assignmentguid,
                questassignmentid: assignments[n].questassignmentid,
                isActive: assignments[n].isActive,
                tabs: [{
                        tabid: 100,
                        title: 'introduction',
                        childtabs: []
                    },
                    {
                        tabid: 200,
                        title: 'contacts',
                        childtabs: ['profile', 'external']
                    },
                    {
                        tabid: 300,
                        title: 'profiles',
                        childtabs: ['internal', 'quest']
                    },
                    {
                        tabid: 400,
                        title: 'events',
                        childtabs: []
                    }
                ]
            }
        })
    }
}