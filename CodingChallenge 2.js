console.log('Test Test 1234')
const Data1 = [5, 2, 4, 1, 15, 8, 3]
const Data2 = [16, 6, 10, 5, 6, 1, 4]

//1
const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map((age => age <= 2 ? age * 2 : 16 + age * 4));
    // console.log(humanAges);
    const adults = humanAges.filter((age => age > 18))
    // console.log(adults);
    // console.log(average);
    return adults.reduce((acc, age) => acc + age / adults.length, 0)
}

console.log(calcAverageHumanAge(Data1));
console.log(calcAverageHumanAge(Data2));

