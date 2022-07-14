'use strict';
console.log("Test Test 1 2 3 4 ... WELCOME")

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Fierenze, Italia',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Organic'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        },
    },
    order: function (startedIndex, mainIndex) {
        return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({starterIndex, mainIndex, address, time}){
        console.log(
            `Order Recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to '${address}' at ${time}`
        );
    }
}

restaurant.orderDelivery({
    time:'22:30',
    address:'Via del sole,21',
    mainIndex:2,
    starterIndex:2
})

// console.log(restaurant);
// Must WRITE the EXACT names of the VARIABLES to extract them from the object DESCTRUCTURE
const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories)

// Can rename the variables
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant
console.log(restaurantName, hours, tags)

//Give default values in case it doesn't exists
const {menu = [], starterMenu: starter = []} = restaurant
console.log(menu, starter)

//Mutating Values
let a = 111;
let b = 999;
const obj = {
    a: 23,
    b: 7,
    c: 14
};
({a, b} = obj)
console.log(a, b)

//Nested Objects
const {fri:{open:o,close:c}} = openingHours
console.log("Opening hours:",o,c);


//Array Destructuring
// let [main, , secondary] = restaurant.categories;
// console.log("Elements: ", main, secondary);

//Switch the elements within the array
// [main, secondary] = [secondary, main];
// console.log("Elements switched: ", main, secondary);

//Order Function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);


//Nested Arr Destr Example
// const nested = [2, 4, [5, 6]];
// const [i,,j] = nested
// console.log(i,j)

// const [i, , [j, k]] = nested
// console.log(i, j, k)


//Setting Default Values
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r)

























