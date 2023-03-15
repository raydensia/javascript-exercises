const findTheOldest = function(people) {
    thisYear = (new Date()).getFullYear();
    let ages = people.map((person) => {
        if (person.yearOfDeath == null) {
            return thisYear - person.yearOfBirth;
        }
        return person.yearOfDeath - person.yearOfBirth;
    });

    let oldest = 0;
    let indexOldest = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > oldest) {
            oldest = ages[i];
            indexOldest = i;
        }
    }
    return people[indexOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
