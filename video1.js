"use strict"

const restaurant  = {
    name : "Classico Italiano",
    location: "Via angelo Tavanti 23, Firenze , Italy",
    categories: ['Italian', "Oizzeria", "Vegetarian", "Organic"],
    starterMenu: ['Focaccia', "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

const [first, second] = restaurant.categories;
// console.log(second);

let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
// console.log(main, secondary);
const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

const mestd = [2,3,[5,6,7]];
// const [i, ,j] = mestd;
// console.log(i, j);
const [i, ,[j,k]] = mestd;
// console.log(i, j , k);

// defaule values
const [p =1, q = 1, r = 1] = [8,9];
console.log(p, q, r);