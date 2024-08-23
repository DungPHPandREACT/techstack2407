// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
let growth = [
	[5, 8, 9, 16], // năm 1 => trung bình tăng trưởng của năm 1 = (5 + 8 + 9 + 16)/4
	[2, 7, 1, 9], // năm 2 => trung bình tăng trưởng của năm 2 = (2 + 7 + 1 +9)/4
	[5, 6, 8, 12], // năm 3 => trung bình tăng trưởng của năm 3 = (5 + 6 + 8 + 12)/4
	[10, 2, 1, 8], // năm 4 => trung bình tăng trưởng của năm 4 = (10 + 2 + 1 + 8)/4
	[20, 4, 9, 1], // năm 5 => trung bình tăng trưởng của năm 5 = (20 + 4 + 9 + 1)/4
];
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
const avgGrowth = [];
for (let yearGrowth of growth) {
	let avg = 0;
	for (let quarterlyGrowth of yearGrowth) {
		avg += quarterlyGrowth;
	}
	avg = avg / yearGrowth.length;
	avgGrowth.push(avg);
}
console.log(avgGrowth);

// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
let max = avgGrowth[0];
for (let avg of avgGrowth) {
	if (max < avg) {
		max = avg;
	}
}
console.log('max: ', max);

// -Tìm giá trị tăng trưởng theo quý lớn nhất.
let maxQuarterlyGrowth = growth[0][0];
for (let row of growth) {
	for (let col of row) {
		if (col > maxQuarterlyGrowth) {
			maxQuarterlyGrowth = col;
		}
	}
}
console.log('maxQuarterlyGrowth: ', maxQuarterlyGrowth);

// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).
const avgQuarterlyGrowth = [];
for (let col = 0; col < growth[0].length; col++) {
	let avg = 0;
	for (let row = 0; row < growth.length; row++) {
		avg += growth[row][col];
		// console.log(growth[row][col]);
	}
	avg = avg / growth.length;
	avgQuarterlyGrowth.push(avg);
	// console.log('col:', col);
}

console.log(avgQuarterlyGrowth);
