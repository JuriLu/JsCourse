'use strict'

//Functions taking another function as parameter
// const oneWord = function (str){
//     return str.replace(/ /g, '').toLowerCase();
// }
//
// const upperFirstWord = function (str){
//     const [first,...others] = str.split(' ')
//     return[first.toUpperCase(),...others].join(' ')
// }
//
// const transformer = function (str,func){
//     console.log(`Original String: ' ${str} '`);
//     console.log(`Transformed String:' ${func(str)} '`);
//     console.log(`Transformed By: ${func.name}`)
// }
//
// transformer('Javascript is the best!',upperFirstWord)
// transformer('Javascript is the best!',oneWord)
//
// const high5 = function (){
//     console.log('Hi there')
// }
//
// document.body.addEventListener('click',high5)

//Functions Returning other Functions

const greet = function (greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey')

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas')

const greetArr = greeting => name => console.log(`${greeting} ${name}`)

greetArr('HI')('John')
