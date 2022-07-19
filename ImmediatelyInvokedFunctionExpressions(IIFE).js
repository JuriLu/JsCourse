'use strict';
// Function that is executed only once
// Function tha disappears right after it is called once

(function () {
    console.log('This will never run again')
    const isPrivate = 23
})();
// console.log(isPrivate)    //variable outside the scope , IIFE or normal function

(() =>  console.log('This will ALSO never run again'))();

