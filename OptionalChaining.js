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

//Validation check without optinal chaining
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)

//Validation check with optional chaining
    // console.log(restaurant.openingHours.mon?.open)
    // console.log(restaurant.openingHours?.mon?.open)

//Example
const days = ['mon','tue','wed','thu','fri','sat','sun'];
for (const day of days){
    const open = restaurant.openingHours[day]?.open ?? "Closed"
    console.log(`On ${day}, we open at ${open}`)
}

//Methods
console.log(restaurant.order?.(0,1)?? 'Method does not exists')
console.log(restaurant.orderRisoto?.(0,1)?? 'Method does not exists')

//Arrays
const users = [{
    name:'Jonas',
    email:'hello@jonas.com'
}];

console.log(users[0]?.name ?? 'User Array Empty');  //With Optional Chaining
if (users.length > 0) console.log(users[0].name) ; else console.log('User Array Empty') //Without Optional Chaining
