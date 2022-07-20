'use strict';

const flight = 'LH234'
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 251324564
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr ' + passenger.name

    if (passenger.passport === 251324564) {
        alert('Checked In')
    } else {
        alert('Wrong Passport')
    }
}

// checkIn(flight,jonas)
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
    console.log(person.passport);
}

newPassport(jonas);
checkIn(flight, jonas);
