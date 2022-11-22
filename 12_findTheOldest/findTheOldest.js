const findTheOldest = function (people) {

    let currentYear = new Date().getFullYear();

    let old = people.reduce(

        (previousPerson, currentPerson) => {

            if (previousPerson.yearOfDeath == undefined) {
                previousPerson.yearOfDeath = currentYear;
            }

            if (currentPerson.yearOfDeath == undefined) {
                currentPerson.yearOfDeath = currentYear;
            }

            let previousPersonAge = previousPerson.yearOfDeath - previousPerson.yearOfBirth;
            let currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;


            if (previousPersonAge > currentPersonAge) {
                return previousPerson;
            }

            return currentPerson;


        }
    )

    return old;

};

// Do not edit below this line
module.exports = findTheOldest;
