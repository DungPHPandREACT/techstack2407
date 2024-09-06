const $fullname = document.getElementById('fullname');
const $email = document.getElementById('email');
const $password = document.getElementById('password');
const $btnRegister = document.getElementById('btn-register');

function validateEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

$btnRegister.onclick = function () {
	const fullname = $fullname.value.trim();
	const email = $email.value;
	const password = $password.value;

	if (fullname.length < 1 || email.length < 1 || password.length < 1) {
		alert('Nhập đầy đủ thông tin');
	} else {
		if (password.length < 6) {
			alert('Mật khẩu tối thiểu 6 ký tự');
		}
		if (validateEmail(email) == false) {
			alert('Email phải đúng định dạng');
		} else {
			alert('Đăng ký thành công');
		}
	}
};
