'use strict';

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking();
// booker();
// booker();
// booker();

// CLOSURE makes possible that: function has access to the variable environment(VE) of the execution context
// in which the function was created event after that execution contest is gone


//Example 1
let f;

const g = function () {
    const a = 23
    f = function () {
        console.log(a * 2)
    }
}

const h = function () {
    const b = 777
    f = function () {
        console.log(b * 2)
    }
}

g();
f()

//Reassigned F functino
h()
f()

//Example 2

const boardPassengers = function (n,wait){
    const perGroup = n/3

    setTimeout(function (){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are three groups, each with ${perGroup} passengers`)
    },wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`)
}

boardPassengers(180,3)
