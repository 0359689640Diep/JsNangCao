const calcAverageHuanAge = function(ages){
    const humanAges = ages.map(age => 
        age <= 2 ? 2 * age : 16 + age * 4);
        const adults = humanAges.filter(age => age >= 18);
        const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0) / adults.length;
        return average;
}

calcAverageHuanAge = ages =>
    ages
        .map(age => 
        age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0)

const avg1 = calcAverageHuanAge([5,2,1,15,8,3]);
console.log(avg1);
const avg2 = calcAverageHuanAge([16,6,10,5,6,1,4]);
console.log(avg2);