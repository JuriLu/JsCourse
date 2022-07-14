# JsCourse
Course Content since first commit:
  + Array Desctructure
  + Object Destructure
  + For-OfLoop 
  + Logical Assignment Operator
  + PrimitiveVsReference Types
  + Spread Operator
  + Rest Operator
  + **Coding Challenge Football**
  + Optional Chaining


Main Object
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
orderPizza(mainIngredient,...otherIngredients){
console.log(mainIngredient);
console.log(otherIngredients);
}
}
