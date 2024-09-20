// function sum(a = 0, b = 0) {
// 	return a + b;
// }

// console.log(sum()); //
// // a = undefined
// // b = undefined
// // a + b = undefined + undefined = NaN (not a number)
// // a = 0
// // b = 0
// // a + b = 0 + 0 = 0

// console.log(sum(5)); //
// // a = 5
// // b = undefined
// // a + b = 5 + undefined = NaN (not a number)
// // a = 5
// // b = 0
// // a + b = 0 + 5 = 5

// console.log(sum(5, 8)); //
// // a = 5
// // b = 8
// // a + b = 5 + 8 = 13
// // a = 5
// // b = 8
// // a + b = 5 + 8 = 13

// Template literal
// Ưu điểm 1: Viết chuỗi được trên nhiều dòng
// Hello
// My name is T3H
// const greating = 'Hello \nMy name is T3H';
// const greating = `Hello
// My name is T3H`;
// console.log(greating);

// const score = 7;
// // Nếu score >= 8
// // Output: Theo điểm thì bạn đạt học sinh giỏi
// // Nếu score < 8
// // Output: Theo điểm thì bạn đạt học sinh khá
// // const result = 'Theo điểm thì bạn đạt học sinh ' + (score >= 8 ? 'giỏi' : 'khá');
// // const result = `Theo điểm thì bạn đạt học sinh ${score >= 8 ? 'giỏi' : 'khá'}`;
// const course1 = 'HTML';
// const course2 = 'CSS';
// const course3 = 'Javascript';
// // Ở T3H có các khóa học HTML, CSS và Javascript
// // const result =
// // 	'Ở T3H có các khóa học ' + course1 + ', ' + course2 + ' và ' + course3;
// const result = `Ở T3H có các khóa học ${course1}, ${course2} và ${course3}`;
// console.log(result);

// Destructuring
// Destructuring with array
// const fruits = ['orange', 'apple', 'banana'];
// // Cách làm thông thường
// // const fruit0 = fruits[0];
// // const fruit1 = fruits[1];
// // Sử dụng destructuring
// const [fruit0, , fruit2, fruit3 = 0] = fruits;
// console.log(fruit0);
// // console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);

// Destructuring with object
// const person = {
// 	name: 'T3H',
// 	age: 30,
// 	gender: 'boy',
// };
// // Cách làm thông thường
// // const name = person.name;
// // const age = person.age;
// // Sử dụng destructuring
// const { name, age: personAge, gender = 'girl' } = person;
// // personName = 'T3H' và personAge = 30
// console.log(name);
// console.log(personAge);
// console.log(gender);

// const name = 'T3H';
// const address = 'Hồ Tùng Mậu';
// const trainingCenter = {
// 	name: name,
// 	address: address,
// 	// ES5
// 	// logger: function () {
// 	// 	console.log('Xin chào thế giới');
// 	// },
// };

// const keyObject = 'myKey';
// const trainingCenter = {
// 	name,
// 	address,
// 	// ES6;
// 	logger() {
// 		console.log('Xin chào thế giới');
// 	},
// 	[keyObject]: 'giá trị test',
// };

// trainingCenter.logger();
// console.log(trainingCenter);

// Khởi tạo function bình thường
// function sum(a, b) {
// 	return a + b;
// }
// Syntax của arrow function
// const/let/var function_name = (parameters) => {
// code_block
// }
// Trong đó:
// function_name: tên của hàm
// parameters: các tham số truyền vào hàm
// code_block: code thực thi của hàm
// const sum = (a, b) => {
// 	return a + b;
// };
// Cách viết short hand
// Nếu trong phần code_block chỉ có 1 dòng thì có thể bỏ {}
// const sum = (a, b) => console.log(a + b);
// const square = (a) => a * a;
// sum(5, 8);

// Sự khác nhau giữa arrow function và function bình thường
// + Arrow function không có cơ chế hoisting còn function bình thường có cơ chế hoisting
// console.log(sum(5, 8));
// const sum = (a, b) => a + b;
// console.log(sum(4, 8));
// function sum(a, b) {
// 	return a + b;
// }

// + Arrow function không có context (ngữ cảnh) còn function bình thường có context
// bind, apply, call
// const student = {
// 	name: 'Student 1',
// 	// logger: function () {
// 	// 	console.log('Hello ', this.name);
// 	// 	// Hello Student 1
// 	// },
//     // logger: () => {
//     //     console.log('Hello ', this);
//     // }
// };
// student.logger();

// {
// 	var course1 = 'HTML';
// 	let course2 = 'CSS';
// 	const course3 = 'Javascript';
// }

// console.log(course3);

// let number = 20;
// console.log(number);
