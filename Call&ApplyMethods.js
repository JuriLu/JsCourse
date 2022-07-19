'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `flight ${this.iataCode}${flightNum}`, name})
    },


};

lufthansa.book(239, 'Jonas Schmedtmann')
lufthansa.book(133, 'Jurgen Lubonja')


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

}

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

const book = lufthansa.book

book.call(eurowings, 23, 'Sarah Williams')
book.call(lufthansa, 27, 'John Mitchell')
book.call(swiss, 27, 'Mary Cooper')

const flightData = [583,'George Cooper'];

book.apply(swiss,flightData)        // Same thing   Old version
book.call(swiss,...flightData)      // Same thing   New version

console.log(lufthansa);
console.log(eurowings);
console.log(swiss);



//  Call functions takes as first parameter 'Where does the this keyword want you to bind' and the rest are the other parameters of the function
//  Apply method it the same as Call method ,except that it doesn't take parameters after the first parameter
//      but it takes an array of parameters

//Creating a new const Book we give as value the functions of lufthansa.book
// but it holds the this keyword which refers to the lufthansa object ,that is why
// we must use other methods to transform it

//  A functions is really just an object, objects have methods and therefore functions can have methods too call()  bind() etc
