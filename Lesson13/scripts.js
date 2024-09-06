// Lưu trữ thông tin trên local storage
// Cách 1: lưu trữ thông qua hàm setItem
// localStorage.setItem('number', 200);
// Cách 2: lưu trữ theo kiểu object
// localStorage['pi'] = 3.14;

// Lấy thông tin trên local storage
// Cách 1:
// const number = localStorage.getItem('number');
// Cách 2
// const pi = localStorage['pi'];
// console.log(number);
// console.log(pi);

// Xóa thông tin trên local storage
// Cách 1: xóa chỉ định
// localStorage.removeItem('number');
// Cách 2: xóa toàn bộ
// localStorage.clear();

// Cookie
// const valuesCookie = document.cookie;

// function getValueCookie(name) {
// 	const arr = valuesCookie.split(';');
// 	for (let element of arr) {
// 		if (element.trim().includes(name)) {
// 			const result = element.trim().split('=');
// 			return result[1];
// 		}
// 	}
// }

// console.log(getValueCookie('username'));


