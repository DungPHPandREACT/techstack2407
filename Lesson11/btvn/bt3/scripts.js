// 3. Khai báo 1 function với đầu vào là day, month, year.
// Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.

function checkTime(day, month, year) {
	// Kiểm tra tính hợp lệ của tháng
	if (month < 1 || month > 12) {
		return false;
	}

	// Xác định số ngày tối đa của 1 tháng
	// Đó là 1 năm sẽ có 7 tháng 31 ngày gồm: 1, 3, 5, 7, 8, 10 và 12.
	// Có 4 tháng có 30 ngày gồm: 4, 6, 9 và 11.
	// Riêng tháng 2 chỉ có 28 hoặc 29 ngày tùy vào năm nhuận
	let dayInMonth;
	switch (month) {
		case 4:
		case 6:
		case 9:
		case 11:
			dayInMonth = 30;
			break;
		case 2:
			if (year % 4 === 0) {
				dayInMonth = 29;
				break;
			} else {
				dayInMonth = 28;
				break;
			}
		default:
			dayInMonth = 31;
	}

	// Kiểm tra tính hợp lệ của ngày
	if (day < 1 || day > dayInMonth) {
		return false;
	}

	return true;
}

let result = checkTime(13, 2, 2022);
if (result === true) {
	console.log('Ngày tháng năm hợp lệ');
} else {
	console.log('Ngày tháng năm không hợp lệ');
}
