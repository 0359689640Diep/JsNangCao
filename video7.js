const orderSet = new Set([
    "Pasta",
    "Pizza",
    "Risotto",
    "Pasta",
    "Pizza"
]);

// sét có tác dụng đếm các phần tử duy nhất không bị trùng trong mảng
console.log(orderSet.size);
// Kiểm tra xem một phần tử có trong mảng hay không
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Break"));
// Thêm một giá trị vào trong mảng
orderSet.add("Garlic Bread");
// xóa một phần tử khỏi mảng
orderSet.delete("Risotto");
// xóa tất cả dữ liệu có trong mảng
orderSet.clear();

// lấy ra mảng các phần tử không bị trùng lặp
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);