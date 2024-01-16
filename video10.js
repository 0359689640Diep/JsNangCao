const airline = "TAP Air Portugal";

const plane = "A320";

// Viết hoa chuỗi
// console.log(airline.toUpperCase());

// chuyển một chuỗi ngẫu nghiên thành chuỗi viết thường, rồi tiến hành cho chữ cái đầu viết hoa
const passenger = "JOnAS";
// làm cho chuỗi viết thường hết 
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// cắt chuỗi rồi so sánh
 const email = "vudiep621@gmail.com";
 const loginEmail = "  Vudiep621@gmail.com \n";

 const normalizeEmail = loginEmail.toLowerCase().trim();
//  console.log(normalizeEmail);
//  console.log(email === normalizeEmail);

// tìm và thay thế kí tự trong chuỗi
const priceGB = "288,97R";
const priceUS = priceGB.replace("R", "$").replace(",", ".");
// console.log(priceUS);

const announcement = "All passengers come to barding door 23. Boarding door 23!";
// thay thế 1 kí tự đầu tiên khi tìm thấy
// console.log(announcement.replace("door", "gate"));
// thay thế toàn bộ ký tự tìm thấy
// console.log(announcement.replaceAll("door", "gate"));

// tìm kiếm trong một chuỗi
const planes = "Airbus A320neo";
// console.log(planes.includes("A320"));
// console.log(planes.startsWith("A320"));

if(planes.startsWith("Airbus") && planes.endsWith("neo")) {
    // console.log("Part of the New Aribus family");
}

const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if(baggage.includes("knife") || baggage.includes("gun")) {
        console.log("You are Not allowed on board");
    }else{
        console.log("Welcom aboard!");
    }
};

checkBaggage("I have a laptop some food and a pocket Kbife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");