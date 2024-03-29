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
    }
};

const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// Default value
const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// Mutating variables
let a = 111;
let b  = 999;
const obj = {a: 23, b: 7, c: 14};
({a,b} = obj);
// console.log(a,b);

const {fri: {open, close}} = openingHours
console.log(open, close);