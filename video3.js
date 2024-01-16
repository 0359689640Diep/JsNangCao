"use strict"

const restaurant  = {
    name : "Classico Italiano",
    location: "Via angelo Tavanti 23, Firenze , Italy",

    categories: ['Italian', "Oizzeria", "Vegetarian", "Organic"],

    starterMenu: ['Focaccia', "Bruschetta", "Garlic Bread", "Caprese Salad"],

    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
    }
};

const array = [7,8,9];
const badNewArr = [1,2, array[0], array[1], array[2]];
// console.log(badNewArr);

const newArr = [1,2, ...array];
// console.log(newArr);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);

// Interables: array, string, maos, sets, not object 
const str = "henry";
const letters = [...str, "", "s."];
// console.log(letters);

const ingredients = [
    prompt("let\s , make pasta! Ingredient 1?"),
    prompt("let\s , make pasta! Ingredient 2?"),
    prompt("let\s , make pasta! Ingredient 3?"),
];
// console.log(ingredients)

restaurant.orderPasta(...ingredients)