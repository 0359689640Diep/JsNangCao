"use strict"

let arr = ["a", "b", "c", "d", "e"];
// // cắt mảng từ vị trí đầu đến vị trí chỉ định
// console.log(arr.slice(2));
// // cắt mảng từ vị trí 2 đến vị trí 4
// console.log(arr.slice(2,4));

const arr2 = ["h","f","j","i","g"];
// đảo ngược lại mảng
// console.log(arr2.reverse());

// gộp 2 mảng lại với nhau
const letters = arr.concat(arr2);
// console.log(letters);

// chèn thêm ký tự vào mảng
console.log(letters.join(' - '));