'use strict';

console.log("Test Test 1 2 3 4...Welcome")

//The Object

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
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}


//Property names
const properties = Object.keys(openingHours)
console.log(properties);

let openStr = `We are open on ${properties.length} days: `


for (const day of properties) {
    openStr += `${day},`
}
console.log(openStr)


//Property Values
const values = Object.values(openingHours)
console.log(values);


//Entire object
const entries = Object.entries(openingHours)
console.log(entries);

for (const [key,{open,close}] of entries)
    console.log(`On ${key} we open at ${open} and close at ${close}`);
