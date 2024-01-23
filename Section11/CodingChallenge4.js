const dogs = [
    {weight: 22, curFood: 250, owners: ["Alice", "Bob"]},
    {weight: 8, curFood: 200, owners: ["Matilda"]},
    {weight: 13, curFood: 275, owners: ["Sarah", "John"]},
    {weight: 32, curFood: 340, owners: ["Michael"]}
];

dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75*28));
// console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));
// console.log(dogSarah);
// console.log(`Sarah's dogis eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

const ownersEatingTooMuch = 
    dogs
        .filter(dog => dog.curFood > dog.recFood)
        .flatMap(dog => dog.owners)
        ;
// console.log(ownersEatingTooMuch);
const ownersEatingTooLittle = 
    dogs
        .filter(dog => dog.curFood < dog.recFood)
        .flatMap(dog => dog.owners)
        ;
// console.log(ownersEatingTooMuch);

console.log(`${ownersEatingTooMuch.join(" and ")}dogs eat too much`);
console.log(`${ownersEatingTooLittle.join(" and ")}dogs eat too little`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

const checkEatingOk = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1 ;

console.log(dogs.some(checkEatingOk));

console.log(dogs.filter(checkEatingOk));

const dogsSorted = dogs.slice().sort((a,b) => a.recFood-b.recFood);
console.log(dogsSorted);

