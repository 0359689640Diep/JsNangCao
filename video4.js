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

// destructuring
const [Pizza,  , Risotto, ...orderFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(Pizza, Risotto, orderFood);

// object
const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// functions
const add = function(...number) {
   let sum = 0;
   for( let i = 0; i < number.length; i++) sum += number[i];
//    console.log(sum);
}

add(2,3);
add(2,3, 5, 6);
add(2,3, 0,8,3,34);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");