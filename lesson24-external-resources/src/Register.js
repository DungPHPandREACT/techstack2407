import { useState } from 'react';

const Register = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		const objTemp = { ...formData };
		const key = event.target.name;
		const value = event.target.value;

		objTemp[key] = value;

		setFormData(objTemp);
	};

	const validateForm = () => {
		let valid = true;
		let newErrors = {};

		// Kiểm tra username
		const username = formData.username.trim();
		if (username === '') {
			valid = false;
			newErrors.username = 'Vui lòng nhập tên đăng nhập';
		}
		if (username.length < 2) {
			valid = false;
			newErrors.username = 'Tên đăng nhập chưa hợp lệ';
		}

		// Kiểm tra email
		const email = formData.email.trim();
		if (email === '') {
			valid = false;
			newErrors.email = 'Vui lòng nhập email';
		}

		const password = formData.password.trim();
		if (password === '') {
			valid = false;
			newErrors.password = 'Vui lòng nhập mật khẩu';
		} else if (password.length < 6 || password.length > 24) {
			valid = false;
			newErrors.password = 'Mật khẩu chưa hợp lệ';
		}

		setErrors(newErrors);

		return valid;
	};

	const handleSubmit = () => {
		const statusData = validateForm();

		if (statusData) {
			console.log('Đăng ký thành công');
		}
	};

	return (
		<div>
			<h1>Đăng ký</h1>
			<div>
				<div style={{ marginTop: 12 }}>
					<label>Tên tài khoản</label>
					<input
						name='username'
						value={formData.username}
						onChange={handleChange}
						type='text'
						placeholder='Nhập tên tài khoản'
					/>
					{/* {errors.username ? <div>{errors.username}</div> : ''} */}
					{errors.username && (
						<div style={{ color: 'red' }}>{errors.username}</div>
					)}
				</div>
				<div style={{ marginTop: 12 }}>
					<label>Email</label>
					<input
						name='email'
						value={formData.email}
						onChange={handleChange}
						type='email'
						placeholder='Nhập email'
					/>
					{errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
				</div>
				<div style={{ marginTop: 12 }}>
					<label>Mật khẩu</label>
					<input
						name='password'
						value={formData.password}
						onChange={handleChange}
						type='password'
						placeholder='Nhập mật khẩu'
					/>
					{errors.password && (
						<div style={{ color: 'red' }}>{errors.password}</div>
					)}
				</div>
				<button onClick={handleSubmit}>Đăng ký</button>
			</div>
		</div>
	);
};

export default Register;
