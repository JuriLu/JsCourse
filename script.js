'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300], interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis', movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30], interestRate: 1.5, pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith', movements: [430, 1000, 700, 50, 90], interestRate: 1, pin: 4444,
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

const displayMovements = function (movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `
         <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div> `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    })
}
displayMovements(account1.movements)

//Show Balance on the top of the screen
const calcDisplayBalance = function (movements) {
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance}€`
}
calcDisplayBalance(account1.movements)


//Calculate summary bottom left of the window
const calcDisplaySummary = function (movements) {
    const incomes = movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0)
    labelSumIn.textContent = `${incomes}€`

    const out = movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`

    const interest = movements
        .filter(mov => mov > 0)
        .map(mov => mov * 1.2 / 100)
        .filter(mov => mov >= 1)
        .reduce((acc, mov) => acc + mov)
    labelSumInterest.textContent = `${interest}`
}
calcDisplaySummary(account1.movements)

//Create Usernames from names
const createUsernames = function (accs) {                // array of account objects
    accs.forEach(function (acc) {
        acc.username = acc.owner                        // create a new key username with the value tolowercase.split.map
            .toLowerCase()
            .split(' ')
            .map(word => word.at(0)).join('');
    })
};
// console.log(accounts)


createUsernames(accounts);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd)

// console.log(movements)
// console.log(movementsUSD)

const movementsDescriptions = movements.map((mov, i) => {
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`

})

console.log(movementsDescriptions);


// FILTER METHOD
// Filter Method returns only the first element from the array that you specify the rule
// Filter Method return the element itself not the array

const firstWithdrawal = movements.find(mov => mov < 0)
console.log(firstWithdrawal);
