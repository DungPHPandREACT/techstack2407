// Cách 1
const obj1 = {}; // object rỗng
const student1 = {
	name: 'Nguyễn Văn A',
	gender: 'boy',
	score: 9,
	1: 'một',
};

// Cách 2
// const obj2 = new Object(); // object rỗng
// const student2 = new Object({
// 	name: 'Lung Thị Linh',
// 	gender: 'girl',
// });

console.log(student1);
// Truy xuất
// const variable = 'name';
// Cách 1: object.key
// Truy xuất đến key tên là variable trong object student1
// console.log(student1.name);
// console.log(student1.level); // khi truy xuất đến 1 key chưa được khai báo trong object => trả về undefined
// console.log(student1.1) // => lỗi
// Cách 2: object[key]
// Truy xuất đến key đang là giá trị của biến variable trong object student1
// console.log(student1[variable]);
// console.log(student1['1']); // hợp lệ

// student1['level'] = 'giỏi';
// console.log(student1);

// student1['level'] = 'rất giỏi';
// console.log(student1);

// delete student1['level'];

// console.log(student1);

// Duyệt object
// console.log(Object.entries(student1));

// console.log(Object.keys(student1));
// console.log(Object.values(student1));

// console.log(student1.hasOwnProperty('level'));

// const stu1 = {
// 	name: 'Nguyễn Văn A',
// 	age: 18,
// };
// // giá trị sẽ được lưu trên 1 ô nhớ trên thanh ram, địa chỉ A
// const stu2 = stu1; // gán địa chỉ ô nhớ
// // stu1 và stu2 đang cùng trỏ đến 1 địa chỉ ô nhớ là A

// stu1.name = 'Trần Văn B';
// // {
// // 	name: 'Trần Văn B',
// // 	age: 18,
// // }

// console.log(stu1.name); // Trần Văn B
// console.log(stu2.name); // Trần Văn B

// const arr1 = [1, 2, 3]; // địa chỉ ô nhớ là A
// arr1.push(4, 5);
// console.log(arr1);

// arr1 = [];

// Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .
// Định nghĩa hàm
// function cal(a, b) {
// 	return (a + b) ** 2;
// }
// Gọi hàm
// console.log(cal(3, 4));
// console.log(cal(4, 5));
// console.log(cal(100, 10));

// 1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.
// function logger(name) {
// 	console.log('Hello world ' + name);
// }

// logger('Nguyễn Văn A');

// 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0.
// Đầu ra là giá trị số vừa nhập.
// function inputNumber() {
// 	let a;
// 	do {
// 		a = prompt('Nhập a');
// 		a = Number(a);
// 	} while (a <= 0);

// 	return a;
// }
// const number = inputNumber();
// console.log(number);

// 2. Khai báo 1 function với đầu vào là 3 số a, b, c.
// Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true.
// Ngược lại, đầu ra là false.

function checkTriangle(a, b, c) {
	if (a + b > c && a + c > b && b + c > a) {
		return true;
	}

	return false;
}

console.log(checkTriangle(3, 4, 5));
