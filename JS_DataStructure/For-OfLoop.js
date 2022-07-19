'use strict';


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Fierenze, Italia',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Organic'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // openingHours: openingHours,
    openingHours,//^^^ES6 object literal
    order: function (startedIndex, mainIndex) {
        return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({starterIndex, mainIndex, address, time}) {
        console.log(`Order Recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to '${address}' at ${time}`);
    },
    orderPizza: function (mainIngredient,...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}

const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

for (const [i,el] of menu.entries()){
    console.log(`${i+1} : ${el}`)
}
