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

const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, "Fierenze,Italy")
rest.set(2, "Fierenze,Italy")

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set(true,'We are Open')
    .set(false,'We are Closed')
    .set('open',11)
    .set('close',23)

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'))
rest.delete(2)
console.log(rest);
