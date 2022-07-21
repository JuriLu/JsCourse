const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements);

const balance =  movements.reduce(function (acc,cur,i,arr) {
    console.log(`Iteration ${i}: ${acc}`)
    return acc + cur ;
},0)

// 0 is the initial value of the accumulator in the first loop iteration
console.log(balance);


//Max Value
const max = movements.reduce((acc,mov) => {
    if (acc > mov){
        return acc
    } else {
        return mov
    }
},movements[0])

console.log(max);
