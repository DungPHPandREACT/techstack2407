import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.required('Vui lòng nhập tên đăng nhập')
				.min(2, 'Tên đăng nhập không hợp lệ')
				.max(100, 'Tên đăng nhập không hợp lệ'),
			email: Yup.string()
				.required('Vui lòng nhập email')
				.email('Email không đúng định dạng'),
			password: Yup.string()
				.required('Vui lòng nhập mật khẩu')
				.min(6, 'Mật khẩu không hợp lệ')
				.max(24, 'Mật khẩu không hợp lệ'),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div>
			<h1>Đăng ký</h1>
			<div>
				<div style={{ marginTop: 12 }}>
					<label>Tên tài khoản</label>
					<input
						name='username'
						value={formik.values.username}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						type='text'
						placeholder='Nhập tên tài khoản'
					/>
					{formik.touched.username && formik.errors.username && (
						<div style={{ color: 'red' }}>{formik.errors.username}</div>
					)}
				</div>
				<div style={{ marginTop: 12 }}>
					<label>Email</label>
					<input
						name='email'
						value={formik.values.email}
						onChange={formik.handleChange}
						type='email'
						placeholder='Nhập email'
					/>
					{formik.touched.email && formik.errors.email && (
						<div style={{ color: 'red' }}>{formik.errors.email}</div>
					)}
				</div>
				<div style={{ marginTop: 12 }}>
					<label>Mật khẩu</label>
					<input
						name='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						type='password'
						placeholder='Nhập mật khẩu'
					/>
					{formik.touched.password && formik.errors.password && (
						<div style={{ color: 'red' }}>{formik.errors.password}</div>
					)}
				</div>
				<button onClick={formik.handleSubmit}>Đăng ký</button>
			</div>
		</div>
	);
};

export default RegisterForm;
