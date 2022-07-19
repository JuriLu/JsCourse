'use strict';

console.log("Test Test 1 2 3 4...Welcome")

//Object
const openingHours = {
    thu: {
        open: 12, close: 22,
    }, fri: {
        open: 11, close: 23
    }, sat: {
        open: 0, close: 24
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Fierenze, Italia',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Organic'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    order(startedIndex, mainIndex) {
        return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery({starterIndex, mainIndex, address, time}) {
        console.log(`Order Recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to '${address}' at ${time}`);
    },
    orderPizza(mainIngredient,...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}

restaurant.orderPizza('mushrooms','onion','olives','spinach')

// 1) Destructuring

//SPREAD,because on the RIGHT side of =     //SPREAD UNPACKS ELEMENTS
const arr = [1, 2, ...[3, 4]];

//REST,because on the LEFT side of =        //REST PACKS ELEMENTS
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others)

//Sample
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood)

//Object Rest Operator
const {sat, ...weekdays} = restaurant.openingHours
console.log(sat, weekdays)


// 2) Functions
const add = function (...numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) sum += numbers[i]
    console.log(sum);
}

add(2, 3)
add(2, 3, 4, 5, 6)
add(2, 3, 4, 5, 6, 7, 8, 9,)

const x = [23, 5, 7]
add(...x);


//
// //Add a new element in the array
// const newMenu = [...restaurant.mainMenu,'Gnoci']
// console.log(newMenu);
//
// //Copy Array
// const mainMenyCopy = [...restaurant.mainMenu]
//
// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
//
// //Spread Operator
// console.log("test...Welcome")
// const arr = [7,8,9]
//
// const newArr = [1,2, ...arr]
// console.log(newArr);
//
// console.log(...newArr)
