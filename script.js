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

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
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
const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`
}
calcDisplayBalance(account1)


//Calculate summary bottom left of the window
const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0)
    labelSumIn.textContent = `${incomes}€`

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(mov => mov * acc.interestRate / 100)
        .filter(mov => mov >= 1)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = `${interest}`
}
calcDisplaySummary(account1)

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

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc.movements)
    // Display balance
    calcDisplayBalance(acc)
    // Display summary
    calcDisplaySummary(acc)
}

//  EVENT HANDLERS
let currentAccount;

// 1 Login Event
btnLogin.addEventListener('click', (e) => {
    e.preventDefault()

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        //Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
        containerApp.style.opacity = 100
    }
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount)

})

// 2 Transfer Money Event
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const recieverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = ''

    if (
        amount > 0 &&
        recieverAcc &&
        currentAccount.balance >= amount &&
        recieverAcc?.username !== currentAccount.username
    ) {
        //Doing the transfer
        currentAccount.movements.push(-amount);
        recieverAcc.movements.push(amount)
        updateUI(currentAccount)
    }
})

// 3 Close Account Event
btnClose.addEventListener('click', (e) => {
    e.preventDefault();

    if (
        currentAccount.username === inputCloseUsername.value &&
        currentAccount.pin === Number(inputClosePin.value)
    ) {
        //Find index will return the index of the first element of the array that matches the condition
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username);
        // console.log(index);

        //Delete Account
        accounts.splice(index, 1)
        //Hide UI
        containerApp.style.opacity = 0
    }
    inputCloseUsername.value = inputClosePin.value = ''
    labelWelcome.textContent = "Log in to get started"
})

// 4 Request Loan
btnLoan.addEventListener('click', (e) => {
    e.preventDefault()

    const amount = Number(inputLoanAmount.value)

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {  //more than 10%
        //Add Movement
        currentAccount.movements.push(amount)

        //Update UI
        updateUI(currentAccount)
    }
    inputLoanAmount.value = ''
})
btnClose.addEventListener('click', (e) => {
    e.preventDefault()
})

let sorted = false;
// 5 Sort Function
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const bankDepositSum = accounts.map(acc => acc.movements).flat()
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0)
console.log(bankDepositSum);

// no. of movements greater than 1000
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count,cur) => cur >= 1000 ? count + 1 : count,0)

console.log(numDeposits1000);


const {deposits,withdrawals} = accounts
    .flatMap(acc => acc.movements)
    .reduce((sums,cur) => {
        // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
        sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur
        return sums
    }, {deposits: 0 , withdrawals:0})
console.log(deposits,withdrawals)


const convertTitleCase = function (title){
    const capitalize = (str) => {
       return str[0].toUpperCase() + str.slice(1)
    }

    const exceptions =['a','an','the','but','or','on','in','with','not','and']

    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
        .join(' ')

    return capitalize(titleCase)

}
console.log(convertTitleCase('this is a nice title'))
console.log(convertTitleCase('this is a LONG title but not too long'))
console.log(convertTitleCase('and here is another title with an EXAMPLE'))

