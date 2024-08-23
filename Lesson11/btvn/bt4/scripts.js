// 4. Cho bộ dữ liệu về users như sau: data.js
console.log('users: ', users);
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// let n = prompt('Nhập n: ');
// n = Number(n);
// // ID không tại
// let isExistId = false;

// for (let user of users) {
// 	if (user.id === n) {
// 		console.log('user: ', user);
// 		isExistId = true;
// 	}
// }

// if (isExistId === false) {
// 	console.log('Không tìm thấy user có id = ', n);
// }

// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// let keyword = prompt('Nhập keyword: ');
// for (let user of users) {
// 	let fullName = user.first_name + user.last_name;
// 	if (fullName.toLowerCase().includes(keyword.toLowerCase())) {
// 		console.log(user.email);
// 	}
// }

// -Đếm số lượng user có age > 50.
// let count = 0;
// for (let user of users) {
// 	if (user.age > 50) {
// 		count = count + 1;
// 	}
// }

// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// let countMarried = 0;
// for (let user of users) {
// 	if (user.is_married === true) {
// 		countMarried = countMarried + 1;
// 	}
// }
// => Chưa kết hôn = tổng số user - countMarried

// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }

// const result = {};
// for (let user of users) {
// 	if (result.hasOwnProperty(user.job) === true) {
// 		result[user.job] = result[user.job] + 1;
// 	} else {
// 		result[user.job] = 1;
// 	}
// }
// console.log(result);