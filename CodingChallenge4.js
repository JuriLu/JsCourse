'use strict';
// console.log('test test 1234... ')

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
//
//
// document.querySelector('button').addEventListener('click',function (){
//     const text = document.querySelector('textarea').value
// })

let createButtonEl = document.createElement('button')
let createTextAreaEl = document.createElement('textarea')
createButtonEl.innerText = 'Enter'

document.body.appendChild(createButtonEl);
document.body.appendChild(createTextAreaEl);

// document.body.append(document.createElement
// ('textarea'));
// document.body.append(document.createElement('button'))


document.querySelector('button').addEventListener
('click', function () {

    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i,row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first} ${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)} ${'*'.repeat(i+1)}`);
    }

});


//test data
// underscore_case
//  first_name
// Some_Variable.
//     calculate_AGE
// delayed_departure ✔️

