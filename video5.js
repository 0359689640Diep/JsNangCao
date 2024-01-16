"use strict"
const restaurant = {
    name: "Classico Italiano",
    location: "Via angelo Tavanti 23, Firenze, Italy",
    categories: ['Italian', "Pizzeria", "Vegetarian", "Organic"],
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
    order: function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },

    orderPizza: function(mainIngredient, ...orderIngredients) {
        console.log(mainIngredient);
        console.log(orderIngredients);
    }

};
// //////////////// OR //////////////////
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //////////////// AND //////////////////

console.log(0 && "diep");
console.log(7 && "diep");
console.log("diep" && 7 && null && "diep");