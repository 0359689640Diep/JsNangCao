const movements = [200, 450, -400, 3000, -650, -130];

// movements.forEach(function(mov, i, arr) {
//     console.log(mov);
//     console.log(i);
//     console.log(arr);
// })

const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

// set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
currenciesUnique.forEach(function (value, key, map) {
    // console.log(`${key}: ${value}`);
})

const eurToUsd = 1.1;
const movementsUSD = movements.map(function(mov){
    return mov * eurToUsd
} )

// console.log(movements);
// console.log(movementsUSD);

const moventsDescriptions = movements.map((mov, i) => 

    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`

);

console.log(moventsDescriptions);
