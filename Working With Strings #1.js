'use strict';
console.log('Test Test ...Welcome')

const airline = 'TAP Air Portugal'
// const plane = 'A320'

/* PART 1*/


// //Get the letters on position[index]
// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log(plane[3])
//
// //Get the length of airline string
// console.log(airline.length);
//
// //Get the INDEX of the Element in string
// console.log(airline.indexOf('r'))
// console.log(airline.lastIndexOf('r'))
//
// // 4 is the position where the slice will start
// console.log(airline.slice(4)); //Air Portugal
// console.log(airline.slice(4, 7)); //Air
//
// //Get the first word
// console.log(airline.slice(0, airline.indexOf(' '))); //TAP
//
// //Get the Last word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal
//
// //Get the last two letters
// console.log(airline.slice(-2)) //al
//
// //Get all the elements without the first and the last
// console.log(airline.slice(1,-1)) // AP Air Portuga
//
// //Will check if the Seat CONTAINS B or E , than it is a middle seat
// const checkMiddleSeat = function (seat){
//     // B & E are the middle seats
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E')
//         console.log('You got the middle seat');
//     else console.log('You got lucky')
// }
//
// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')



/* PART 2 */


// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('jj'.toUpperCase());
//
// //Fix Capitalization in name
// const passenger = 'jOnAS'
// console.log(passenger);
// const passengerLower = passenger.toLowerCase(); //All to lower
// const passengerCorrect = passengerLower[0].toUpperCase() // First letter UP
//     + passengerLower.slice(1) // Add the rest ,without first letter
// console.log(passengerCorrect);
//
//
// //Comparing Email
// const email = 'hello@jonas.io'
// const loginEmail = '   Hello@Jonas.io \n'
// // const lowerEmail = loginEmail.toLowerCase()
// // const trimmedEmail = lowerEmail.trim() //Remove whitespaces
// const normalizedEmail = loginEmail.toLowerCase().trim() //shortcut, all in one function
// console.log(normalizedEmail);
//
// console.log('Email same as logged email? ',email === normalizedEmail)
//
//
// //Replacing parts of string
// const priceGB = '288,97£'
// //replace only 1
// const priceUS = priceGB.replace('£','$').replace(',','.')
// console.log('Price US',priceUS)
// //replace all
// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door','gate'));
// //replace all with Regular Expression RegEx
// console.log(announcement.replace(/door/g,'gate'))
//
// //Booleans
// const plane = 'A320neo';
// console.log('Does A320neo include A320? ',plane.includes('A320'));
// console.log('Does A320neo include Boeing? ',plane.includes('Boeing'));
//
// console.log('Does it start with Air? ',plane.startsWith('Air'))
// if (plane.startsWith('Airbus') && plane.endsWith('neo')){
//     console.log('Part of the NEW Airbus Family')
// }
//
// // Practice Exercise
// const checkBaggage = function (items){
//  const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log("You are NOT allowed on board")
//     } else {
//         console.log("Welcome on Board")
//     }
// }
// checkBaggage('I have a laptop, some Food and pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');


/* PART 3 */

console.log('a+very+nice+string'.split('+'))
console.log('Jonas Schmedtmann'.split(' '))
const [firstName,lastName] = 'Jonas Schmedtmann'.split(' ')

const newName = ['Mr',firstName,lastName.toUpperCase()].join(' ')
console.log(newName);

const capitalizeName = function (name){
    const names = name.split(' ');
    const namesUpper = []

    for (const n of names){
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '))
}

capitalizeName('jessica ann smith davis')
capitalizeName('jurgen lubonja')

//Padding
const message = "Go to gate 23!"
console.log(message.padStart(25,'+').padEnd(35,'+'));
console.log('Jonas'.padStart(25,'+'))


//Real Life example

const maskCreditCard = function (number){
    const str = number + ''; //returns number as string
    const last = str.slice(-4);
    return 'Credit Card :'+last.padStart(str.length,'*')

}

console.log(maskCreditCard(4346570000201740));


//Repeat
const message2 = 'Bad Weather... All Departues Delayed...'
console.log(message2.repeat(5));

const planesInLine = function (n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}

planesInLine(5)
planesInLine(20)
