//Spread Operator
console.log("test...Welcome")
const arr = [7,8,9]

const newArr = [1,2, ...arr]
console.log(newArr);

console.log(...newArr)

//Object
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

//Add a new element in the array
const newMenu = [...restaurant.mainMenu,'Gnoci']
console.log(newMenu);

//Copy Array
const mainMenyCopy = [...restaurant.mainMenu]

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
