// alert('Hello world!');

// var name = 'T3H';
// Khai báo 1 biến tên là name
// Giá trị khởi tạo của biến name là 'T3H'
// console.log(name);

// let address = 'Hồ Tùng Mậu';
// console.log(address);

// let course1, course2;

// course1 = 'HTML';
// console.log(course1);
// course1 = 'CSS';
// console.log(course1);

// const PI = 3.14;
// console.log(PI);
// PI = 10;
// console.log(PI);

//* Những biến được khai báo bằng từ khóa let hoặc var sẽ có đặc điểm như sau
// -Biến đó có thể được khởi tạo mà chưa cần phải gán giá trị khởi tạo
// VD: let course1, course2;
// VD: var module1, module2;
// -Biến đó có thể được gán lại giá trị mới trong quá trình sử dụng
// VD: let age = 18;
//     age = 19;
// VD: var name = 'Cường';
//    name = 'Tuấn';
//* Những biến được khai báo bằng từ khóa const (constant) sẽ có đặc điểm như sau
// -Khi khai báo biến phải gán luôn giá trị khởi tạo, nếu không gán sẽ báo lỗi
// -Biến đó không thể gán lại giá trị mới, nếu cố tình gán => lỗi

// let x = 50;
// let y = 20;
// let z = '30';

// let res1 = x + y; // 70
// let res2 = res1 - z ; // <=> 30 + '30' <=> '30' + '30' <=> '3030'

// // 70 - '30' => 70 - 30 = 40

// console.log(res1);
// console.log(res2);

// let number1 = 10.5; // number

// let str1 = 'chuỗi 1'; // string
// let str2 = 'chuỗi 2'; // string
// let str3 = `chuỗi 3`; // string

// let isGirl = true; // boolean
// let isBoy = false; // boolean

// let isEmpty = null; // null

// let undf = undefined; // undefined

let number1 = 7;
let number2 = 2;

// // Phép cộng
// console.log(number1 + number2); // = 9
// // Phép trừ
// console.log(number1 - number2); // = 5
// // Phép nhân
// console.log(number1 * number2); // = 14
// // Phép tính lũy thừa (mũ)
// console.log(number1 ** number2); // = 49
// // Phép chia lấy thương
// console.log(number1 / number2); // = 3.5
// // Phép chia lấy dư
// console.log(number1 % number2); // = 1
// // Tăng lên 1 đơn vị
// number1 = ++number1;
// console.log(number1); // = 8
// // Giảm đi 1 đơn vị
// number2 = --number2;
// console.log(number2); // = 1

// let number3 = number2;
// number3 = number3 + number2; // number3 += number2
// number3 = number3 - number2; // number3 -= number2
// number3 = number3 * number2; // number3 *= number2
// number3 = number3 / number2; // number3 /= number2
// number3 = number3 % number2; // number3 /= number2
// number3 = number3 ** number2; // number3 **=number2

// let x = 'Hello';
// let y = 'T3H';
// console.log(x + ' ' + y);

let age1 = 18; // type: number
let age2 = '18'; // type: string
let age3 = 20; // type: number
let age4 = 18; // type: number

console.log(age1 == age2); // so sánh giá trị
// => true

console.log(age1 === age2); // so sánh giá trị và kiểu dữ liệu
// => false

console.log(age1 != age2); // so sánh giá trị
// => false

console.log(age1 !== age2); // so sánh giá trị và kiểu dữ liệu
// => true

console.log(age1 > age3);
// => false

console.log(age1 < age3);
// => true

console.log(age1 <= age4);
// => true

console.log(age1 >= age4);
// => true

// 70 - "bamuoi" => NaN (not a number);