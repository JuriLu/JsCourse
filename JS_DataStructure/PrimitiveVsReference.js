console.log('Welcome')

let age = 30
let oldAge = age
age = 31
console.log(`Age: ${age}`);
console.log(`Old age: ${oldAge}`);

const me = {
    name: 'Jurgen',
    age: 24
}

const friend = me
friend.age = 27
console.log("Friend" ,friend)
console.log("Me" ,me)
