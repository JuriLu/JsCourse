'use strict';
console.log(" Test Test 1 2 3 ... Welcome");

//Values in Set are unique,they can't be duplicated
const orderSets = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
]);

console.log(orderSets);

//Creates a set with the letters of the string
console.log(new Set('Jonas'))

//shows the size of the set
console.log('Size',orderSets.size)

//Checks if the element is part of the set
console.log('has set?',orderSets.has('Pizza'))

//Adds element in the set
orderSets.add('Garlic Bread')
console.log(orderSets)

//Deletes element in the set
orderSets.delete('Risotto')
console.log(orderSets)

//Clears the set
// orderSets.clear()
// console.log(orderSets)

for (const order of orderSets) console.log(order)

const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter']
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
