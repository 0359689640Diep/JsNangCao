const airline = "TAP AIR PORTUGAL";

const plane = "A320";

// trả về vị trí kí tự nằm trong chuỗi
// console.log(airline.indexOf("R"));
// console.log(airline.lastIndexOf("R"));
// // cắt  ký tự trong chuỗi, và trả về chuỗi mới 
// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(0, airline.lastIndexOf(" ")));

const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if(s === "B" || s === "E") console.log("You go the middle seat ");
    else console.log("You go lucky");
};
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");
