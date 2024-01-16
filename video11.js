// Cắt bỏ các phần tử được chỉ định. Sau đó đưa chuỗi về dạng mảng
// console.log("a+very+nice+string".split("+"));
// console.log("Jonas Schmedtmann".split(" "));  

// cắt bỏ khoảng trắng lấy ra họ và tên rồi viết hoa toàn bộ tên
const [firsName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firsName, lastName.toUpperCase()].join(" ");
// console.log(newName);

const capitalizeName = function(name) {
    const names = name.split(" ");
    const nameUpper = [];

    for(const n of names) {
        nameUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    // console.log(nameUpper.join(" "));
}

capitalizeName("jessica aann smith davis");
capitalizeName("jonas schedtmann");

const message = "Go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(30, "+"));
// console.log("Jonas".padStart(23, "+").padEnd(30, "+"));

const maskCreditCard = function(number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
}

// console.log(maskCreditCard(234567890));
// console.log(maskCreditCard("234567890546583"));

// lặp lại chuỗi
const message2 = "Bad weather ..All Departues delayed... ";
// console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'p'.repeat(n)}`);
}

planesInLine(5)