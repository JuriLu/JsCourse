'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e']
//
// // SLICE Method
// console.log(arr.slice(2));      // Start from 2 till the end, Return a new array
// console.log(arr.slice(2, 4));   // from position 2 to 4
// console.log(arr.slice(-2));     // last two
// console.log(arr.slice(-1));     // last one
// console.log(arr.slice(1, -1));  // from second to last without the last
// console.log(arr.slice())        // Identical for returning a copy of an array
// console.log([...arr])           // Identical for returning a copy of an array
//
// // SPLICE Method
// // console.log(arr.splice(2))    // Splice changes the original array
// arr.splice(-1) ;  // Deletes the last element of the array
// console.log('Last el deleted',arr)
// arr.splice(1,2) // At position number one and deletes 2 elements
// console.log('B and C Deleted',arr)
//
// // REVERSE Method
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j','i','h','g','f'];
// console.log(arr2.reverse())        // Mutates the original array
// console.log(arr2);
//
// // CONCAT Method
// const letters = arr.concat(arr2);  // Mutates the original array
// console.log(letters);
// console.log([...arr, ...arr2])     // Same logic
//
// // JOIN Method  Creates a String with the elements of the array, with the separator specified
// console.log(letters.join('-'))
//
// //  Other Methods:
// // Push
// // Unshift
// // Pop
// // Shift
// // indexOf
// // includes


// // ES2022 Latest methods
//
// const arr = [23, 11, 64]
// console.log(arr[0])                 // Same functionality , Old version
// console.log(arr.at(0))        // Same functionality, New Version
//
// // Get the last element, but Say we don't know the length of the array
// console.log(arr[arr.length - 1])   // Old Version
// console.log(arr.slice(-1)[0])     // Old Version
// console.log(arr.at(-1))    // New Version
//
// // Works with strings too
// console.log('jonas'.at(-1))

// FOR EACH LOOP
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// for (const [i,movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i+1} You deposited ${movement}`)
//     } else {
//         console.log(`Movement ${i+1} You Withdrew ${Math.abs(movement)}`)
//     }
// }
// console.log("----------------- FOR EACH ----------------")
//
//
// //The name doesn't matter but the order does   first is the element of the array | Second is always the index | Third is the array
// movements.forEach( function (mov,i,arr){
//     if (mov > 0) {
//         console.log(`Movement ${i+1} You deposited ${mov}`)
//     } else {
//         console.log(`Movement ${i+1} You Withdrew ${Math.abs(mov)}`)
//     }
// });

// // FOR EACH IN MAPS
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);
//
// currencies.forEach(function (value, key, map){
//     console.log(`${key}: ${value}`)
// })
//
//
// const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR'])
// console.log(currenciesUnique);
//
// //  _ is a throwAway variable Completely unnecessary variable
// currenciesUnique.forEach(function (value, _, map) {
//     console.log(`${key}: ${value}`)
// })
