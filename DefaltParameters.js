'use strict'

const Bookings = []

const createBooking = function (flightNum, numPassengers = 1, price = 199) {

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    Bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123',10,800)
