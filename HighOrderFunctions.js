'use strict'

const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str){
    const [first,...others] = str.split(' ')
    return[first.toUpperCase(),...others].join(' ')
}

const transformer = function (str,func){
    console.log(`Original String: ' ${str} '`);
    console.log(`Transformed String:' ${func(str)} '`);
    console.log(`Transformed By: ${func.name}`)
}

transformer('Javascript is the best!',upperFirstWord)
transformer('Javascript is the best!',oneWord)

const high5 = function (){
    console.log('Hi there')
}

document.body.addEventListener('click',high5)
