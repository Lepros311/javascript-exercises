const findTheOldest = function(people) {
    let peopleWithAge = people.map((person) => {
        person.map((details) => {
            details[age] = details.yearOfDeath - details.yearOfBirth;
        })
    })
    return peopleWithAge;
};

// Do not edit below this line
module.exports = findTheOldest;
