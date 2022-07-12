'use strict';
console.log("Test Test 1 2 3 4 ... WELCOME")

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Fierenze, Italia',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Organic'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (startedIndex,mainIndex){
        return [this.starterMenu[startedIndex],this.mainMenu[mainIndex]]
    }
}

console.log(restaurant);

//Array Destructuring
let [main, ,secondary] = restaurant.categories;
console.log("Elements: ",main, secondary);

//Switch the elements within the array
[main,secondary] = [secondary,main];
console.log("Elements switched: ",main,secondary);

//Order Function
const [starter,mainCourse]=restaurant.order(2,0);
console.log(starter,mainCourse);



//Nested Arr Destr Example
const nested = [2,4,[5,6]];
// const [i,,j] = nested
// console.log(i,j)

const [i,,[j,k]] = nested
console.log(i,j,k)


//Setting Default Values
const [p=1,q=1,r=1] = [8,9]
console.log(p,q,r)

























