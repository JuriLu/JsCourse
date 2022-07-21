console.log('test test 1234');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const deposits = movements.filter((mov) => {
    return mov > 0
})

console.log(deposits);
