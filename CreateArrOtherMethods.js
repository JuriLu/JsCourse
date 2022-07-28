console.log('test test 1234')

console.log([1, 2, 3, 4, 5, 6, 7])
const arr1 = new Array(1, 2, 3)
console.log(arr1);

const x = new Array(7)  // useless
console.log(x)

x.fill(1)  //except if this used
x.fill(2, 3, 5)   // add value 1 from position 3 to 5
console.log(x)

Array.from({length: 7}, () => 1)   // length 7 return only 1

const z = Array.from({length: 20}, (_, i) => i + 1)
console.log(z)
