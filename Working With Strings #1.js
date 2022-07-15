'use strict';
console.log('Test Test STring 1234 ...Welcome')

const airline = 'TAP Air Portugal'
const plane = 'A320'

//Get the letters on position[index]
console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log(plane[3])

//Get the length of airline string
console.log(airline.length);

//Get the INDEX of the Element in string
console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))

// 4 is the position where the slice will start
console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air

//Get the first word
console.log(airline.slice(0, airline.indexOf(' '))); //TAP

//Get the Last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

//Get the last two letters
console.log(airline.slice(-2)) //al

//Get all the elements without the first and the last
console.log(airline.slice(1,-1)) // AP Air Portuga

//Will check if the Seat CONTAINS B or E , than it is a middle seat
const checkMiddleSeat = function (seat){
    // B & E are the middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E')
        console.log('You got the middle seat');
    else console.log('You got lucky')
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

