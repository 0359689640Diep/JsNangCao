"use strict"
  const openingHours = {
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

const rest = new Map();
rest.set("name", "Classico italiano");
rest.set(1, "Fireze, Italy");
// console.log(rest.set(2, "Libon, Portugal"));

rest
    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Oranic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open :D")
    .set(false, "We are closed :(")
    
    // console.log(rest.get("name"));
    // console.log(rest.get(true));

    const time = 21;
    // console.log(rest.get(time > rest.get("open") && time < rest.get("close")))

    const question = new Map([
        ["question", "What is the best programming language in the world ?"],
        [1,"C"],
        [2, "Java"],
        [3, "JavaScript"],
        ["correct", 3],
        [true, "Cottect "],
        [false, "Try again!"]
    ]);

    // convert object to map
    const hoursMap = new Map(Object.entries(openingHours))
    //  console.log(hoursMap);

    // quiz app
    for (const [key, value] of question) {
        if(typeof key === "number") console.log(`Answer ${key}: ${value}`);
    }
    const answer = Number(prompt("Your answer"));
    console.log(question.get(question.get("correct") === answer));