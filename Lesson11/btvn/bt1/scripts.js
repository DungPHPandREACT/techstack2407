// 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0
//  và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.

function caculate(a, b, c) {
	let delta = b ** 2 - 4 * a * c;

	if (delta > 0) {
		let result1 = (-b + Math.sqrt(delta)) / (2 * a);
		let result2 = (-b - Math.sqrt(delta)) / (2 * a);

		return [result1, result2];
	} else if (delta === 0) {
		let result = -b / (2 * a);
		return [result];
	} else {
		return [];
	}
}

let a, b, c;

do {
	a = prompt('Nhập a (a khác 0)');
	a = Number(a);
} while (a === 0);

b = prompt('Nhập b: ');
b = Number(b);
c = prompt('Nhập c: ');
c = Number(c);

const results = caculate(a, b, c);

if (results.length === 2) {
	console.log('Phương trình có 2 nghiệm phân biệt ', results);
} else if (results.length === 1) {
	console.log('Phương trình có nghiệm kép là: ', results);
} else {
	console.log('Phương trình vô nghiệm');
}
