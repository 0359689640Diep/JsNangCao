const flight = "LH234";
const jonas = {
    name: "Jonas Schemdmann",
    passport: 22345678
}

const checkIn = function(flighNum, passengers) {
    flighNum = "LH999",
    passengers.name = "Mr." + passengers.name;

    if(passengers.passport === 22345678) {
        alert("Checked in")
    }else{
        alert('Wrong passport !');
    }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// const flightNum = filight;
const passenger = jonas;
const newPassport = function(persion) {
    persion.passport = Math.trunc(Math.random() * 1000000000000000);
}
newPassport(jonas);
checkIn(flight, jonas);