const game = {
    team1: "Banyer Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schlz",
            "Hamels",
            "Akanj",
            "Hummels",
            "Weigl",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 8.33,
        x: 3.25,
        team2: 6.5
    }
}

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const laylers1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

const {odds: {team1, x: draw, team2}} = game;

const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
}

// printGoals("Dacies", "Muller", "Lewandowski0" ,"Kimmich");
// printGoals("Dacies", "Muller");
// printGoals(...game.scored)

// team1 < team2 && console.log("Team 1 is more likely to win")
// team1 > team2 && console.log("Team 2 is more likely to win")

// for(const [i, player] of game.scored.entries()) 
// console.log(`Goal ${i +1} : ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds)
average += odd;
average /= odds.length;
// console.log(average);

for(const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
    // console.log(`Odd of ${teamStr} ${odd}`);
}

const gameEvent = new Map([
    [17, "GOAL"],
    [36, "Substitution"],
    [47, "GOAL"],
    [61, "Substitution"],
    [64, "Yellow card"],
    [69, "Red card"],
    [70, "Substitution"],
    [72, "Substitution"],
    [76, "GOAL"],
    [80, "GOAL"],
    [92, "Yellow card"],
]);

const events = [...new Set(gameEvent.values())];
gameEvent.delete(64);
// console.log(gameEvent);

const time = [...gameEvent.keys()].pop();
// console.log(time);

for (const [min, event] of gameEvent) {
    const half = min <= 45 ? "FIRST" : "SECOND";
    // console.log(`[${half} HALF] ${min}: ${event}`);
}

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));


document.querySelector("button").addEventListener("click", function() {
    const text = document.querySelector('textarea').value;
    // cắt ký tự xuống dòng và đưa nó vào thành mảng
    const rows = text.split("\n");

    for(const [i, row] of rows.entries()) {
      const [first, second] =  row.toLowerCase().trim().split("_");
      const output = `${first}${second.replace(
          second[0],
          second[0].toUpperCase()
      )}`;
      console.log(`${output.padEnd(20)}${'icont'.repeat(i + 1)}`);
      
    }
})

// underscore_case
// first_name
// Some_Variable
//      calulate_AGE
// delayed_departure

