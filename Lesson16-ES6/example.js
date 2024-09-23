// const student1 = {
// 	age: 20,
// 	name: 'Student 1',
// }; // A
// const student2 = student1;
// // Gán địa chỉ ô nhớ của student1 cho student2
// // => student2 và student1 đang cùng quản lý 1 địa chỉ ô nhớ

// student2.name = 'Student 2';

// console.log(student1);
// console.log(student2);

// const number1 = [1, 2, 3]; // B
// const number2 = [-1, 0, ...number1, 4, 5, 6];
// const number3 = [...number1, ...number2];
// console.log(number3);

// const student1 = {
// 	age: 20,
// 	name: 'Student 1',
// };
// const student2 = { ...student1, name: 'Student 2' };

// console.log(student1);
// console.log(student2);

// Dãy số 1: 1,2,3,4,5
// Dãy số 2: 1,2,3,4,5,6,7,8
// Dãy số 3: 1,2,3,4,5,6,7,8,9,10
// Dãy số 4: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
// function sum(param1, param2, ...parameters) {
// 	console.log(param1);
// 	console.log(param2);
// 	console.log(parameters);
// 	let sum = 0;
// 	for (let value of parameters) {
// 		sum = sum + value;
// 	}

// 	console.log(sum);
// }

// sum(1, 2, 3, 4, 5);
// sum(1, 2, 3, 4, 5, 6, 7, 8);
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

// Hàm map
const arr1 = [1, 2, 3, 4, 5];
// Tạo ra mảng arr2 với các phần tử là các phần tử tương ứng trong arr[index] * 2

// array.map(callback);
const arr2 = arr1.map((value, index, arr) => {
	return value * 2;
});
console.log(arr2);

const arr3 = arr1.filter((value, index, arr) => {
	return value % 2 === 0;
});
console.log(arr3);
