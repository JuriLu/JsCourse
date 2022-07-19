'use strict';

const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

//OR assignment operator
// /* rest1.numGuests = rest1.numGuests || 10; */  /*Same as*/  rest1.numGuests ||= 10
// /* rest2.numGuests = rest2.numGuests || 10; */  /*Same as*/  rest2.numGuests ||= 10

//NULLISH assignment operator   (null or undefined)  it compares number 0 as value 0 not false
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
  // rest1.owner = rest1.owner && '<ANONYMOUS>';
  // rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'



console.log(rest1)
console.log(rest2)
