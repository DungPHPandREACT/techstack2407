// setTimeout(functionA, time);
// functionA là function được thực thi
// time là thời gian delay (thời gian được tính theo milisecond)

// function logger() {
// 	console.log('Xin chào thế giới');
// }

// setTimeout(logger, 0);
// 4000 miliseconds =  4 second

// setInterval(functionA, time);
// functionA là function được thực thi
// time là khoảng thời gian functionA được thực hiện lại

// setInterval(logger, 2000);

// console.log(1);
// console.log(2);
// console.log(3);
// Thứ tự in ra
// 1
// 2
// 3

// console.log(1); //đồng bộ

// setTimeout(function () {
// 	console.log(2);
// }, 1000); //bất đồng bộ

// console.log(3); //đồng bộ
// console.log(4); //đồng bộ

// function A(callback) {
// 	console.log('Đây là hàm A');
// 	callback();
// }

// function B() {
// 	console.log('Đây là function B');
// }

// function C() {
// 	console.log('Đây là function C');
// }

// A(function () {
// 	console.log('Đây là anonymous function callback');
// });

// setTimeout(function () {
// 	console.log('Anonymous function');
// }, 1000);

function testPromise() {
	return new Promise((resolve, reject) => {
		let number = 0;

		setTimeout(function () {
			number = number + 1;

			if (number === 1) {
				resolve(number);
				// reject('Lỗi rồi');
			}
		}, 1000);
	});
}

// Cách 1: Dùng then() catch();
// testPromise()
// 	.then(function (data) {
// 		console.log('Promise chạy thành công');
// 		console.log('data: ', data);
// 	})
// 	.catch(function (error) {
// 		console.log('Promise chạy thất bại');
// 		console.log('error: ', error);
// 	})
// 	.finally(function () {
// 		console.log('Promise kết thúc');
// 	});

// async function callPromise() {
// 	console.log('A');
// 	let number;
// 	try {
// 		number = await testPromise();
// 		console.log(number);
// 	} catch (error) {
// 		console.log('error: ', error);
// 	} finally {
// 		console.log('Kết thúc promise');
// 	}
// 	console.log('B');
// }

// callPromise();

console.log('A');
console.log('B');
const C = 10;
console.log(C);
try {
	C = 20;
} catch (error) {
	console.log('error: ', error);
}
console.log('D');
