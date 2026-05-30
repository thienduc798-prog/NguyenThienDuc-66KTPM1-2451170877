Phần A - Kiểm tra đọc hiểu
Câu A1:
1. Function Declaration

function tinhThueBaoHiem(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  const thuc_nhan = luong - thue;
  return { thue, thuc_nhan };
}

2. Function Expression


const tinhThueBaoHiem = function(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  const thuc_nhan = luong - thue;
  return { thue, thuc_nhan };
};

3. Arrow Function

const tinhThueBaoHiem = (luong) => {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  const thuc_nhan = luong - thue;
  return { thue, thuc_nhan };
};

Hoisting:
1. Function Declaration: Có Hoisting
	Có thể gọi hàm trước khi khai báo, toàn bộ định nghĩa hàm được đưa lên đầu phạm vi (scope) của nó.
2. Function Expression: Không Hoisting 
    Biến được khai báo nhưng chưa được khởi tạo.
3. Arrow Function: Không Hoisting
    Tương tự như Function Expression.

Câu A2:
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // 1
console.log(c.increment());  // 2 
console.log(c.increment());  // 3 
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
// Output sau 100ms (của vòng lặp var):
// var: 3
// var: 3
// var: 3

// Output sau 200ms (của vòng lặp let):
// let: 0
// let: 1
// let: 2

Tại sao var và let cho kết quả khác nhau?
1. Với var (Function Scope):
var không có phạm vi khối (block scope). Biến i được khai báo bên ngoài vòng lặp hoặc được coi là biến dùng chung cho cả vòng lặp.

Khi setTimeout chạy (sau 100ms), vòng lặp for đã chạy xong từ lâu và giá trị của i lúc này đã tăng lên đến 3.

Vì cả 3 hàm setTimeout đều tham chiếu tới cùng một biến i duy nhất đó, nên chúng đều in ra giá trị cuối cùng là 3.

2. Với let (Block Scope):
let có phạm vi khối. Mỗi lần lặp, JavaScript tạo ra một bản sao mới (binding mới) của biến j cho riêng khối đó.

Khi setTimeout chạy, nó không nhìn vào biến j tổng quát, mà nó "nhớ" giá trị của j tại đúng thời điểm khối đó được thực thi.

Vì vậy, mỗi setTimeout giữ một giá trị riêng biệt (0, 1, và 2).

Câu A3:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

1. Lấy các số chẵn
const evens = nums.filter(n => n % 2 === 0);

2. Nhân mỗi số với 3
const tripled = nums.map(n => n * 3);

3. Tính tổng tất cả
const sum = nums.reduce((acc, n) => acc + n, 0);

4. Tìm số đầu tiên > 7
const firstOver7 = nums.find(n => n > 7);

5. Kiểm tra CÓ số > 10 không
const hasOver10 = nums.some(n => n > 10);

6. Kiểm tra TẤT CẢ đều > 0
const allPositive = nums.every(n => n > 0);

7. Tạo mảng "Số X là [chẵn/lẻ]"
const labeled = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);

8. Đảo ngược mảng (không mutate gốc)
const reversed = [...nums].reverse();

Câu A4:
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);  // "iPhone 16", 25990000, 8, "Titan"
console.log(specs);                    // ReferenceError: specs is not defined

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);        // 16(Vì {...product} chỉ copy nông, specs vẫn dùng chung tham chiếu)

Phần C  - Suy luận
Câu C1:
const processOrders = (orders) => 
  orders
    .filter(({ status, total }) => status === "completed" && total > 100000)
    .map(({ id, customer, total }) => ({
      id, customer, total,
      discount: total * 0.1,
      finalTotal: total * 0.9
    }))
    .sort((a, b) => b.finalTotal - a.finalTotal);

Câu C2:
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },

    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;
        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};

// === Test ===
console.log(miniArray.map([1, 2, 3], x => x * 2));        // → [2, 4, 6]
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));    // → [3, 4]
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10