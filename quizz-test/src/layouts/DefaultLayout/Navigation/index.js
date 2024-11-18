import { Avatar, Button, Checkbox, Dropdown, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigation.css';

const FormLogin = ({ onRegister }) => {
	return (
		<Form name='basic' layout='vertical'>
			<Form.Item
				label='Email'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input size='large' name='email' />
			</Form.Item>

			<Form.Item
				label='Mật khẩu'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input.Password size='large' name='password' />
			</Form.Item>

			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Form.Item name='remember' valuePropName='checked'>
					<Checkbox>Ghi nhớ mật khẩu</Checkbox>
				</Form.Item>

				<Button type='link' onClick={onRegister}>
					Đăng ký
				</Button>
			</div>
		</Form>
	);
};

const FormRegister = () => {
	return (
		<Form name='basic' layout='vertical'>
			<Form.Item
				label='Email'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input size='large' name='email' />
			</Form.Item>
			<Form.Item
				label='Tên tài khoản'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input size='large' name='username' />
			</Form.Item>
			<Form.Item
				label='Mật khẩu'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input.Password size='large' name='password' />
			</Form.Item>
		</Form>
	);
};

const Navigation = () => {
	const [isShowModal, setIsShowModal] = useState(false);
	const [statusModal, setStatusModal] = useState('register');

	const items = [
		{
			key: '1',
			label: <Link to='/profile'>Thông tin</Link>,
		},
		{
			key: '2',
			label: <Link to='/profile'>Đổi mật khẩu</Link>,
		},
		{
			key: '3',
			label: <div>Đăng xuất</div>,
		},
		{
			type: 'divider',
		},
		{
			key: '4',
			label: <Link to='/admin'>Quản trị</Link>,
		},
	];

	const hanldeShowModal = () => {
		setIsShowModal(true);
	};

	const handleHideModal = () => {
		setIsShowModal(false);
	};

	const handleClickButtonRegister = () => {
		setStatusModal('register');
		hanldeShowModal();
	};

	const handleClickButtonLogin = () => {
		setStatusModal('login');
		hanldeShowModal();
	};

	const handleChangeStatusRegister = () => {
		setStatusModal('register');
	};

	const handleSubmit = () => {
		if (statusModal === 'register') {
			console.log('register...');
			return;
		}

		console.log('login...');
	};

	return (
		<>
			<nav className='nav-app'>
				<div className='wrapper'>
					<div className='logo'>
						<Link to='#'>Thi Online</Link>
					</div>
					<input type='radio' name='slider' id='menu-btn' />
					<input type='radio' name='slider' id='close-btn' />
					<ul className='nav-links'>
						<label htmlFor='close-btn' className='btn close-btn'>
							<i className='fas fa-times' />
						</label>
						<li>
							<NavLink to='/'>Trang chủ</NavLink>
						</li>
						<li>
							<NavLink to='/list-exams?subject=all' className='desktop-item'>
								Môn thi
							</NavLink>
							<input type='checkbox' id='showDrop' />
							<label htmlFor='showDrop' className='mobile-item'>
								Dropdown Menu
							</label>
							<ul className='drop-menu'>
								<li>
									<NavLink to='/list-exams?subject=html'>HTML</NavLink>
								</li>
								<li>
									<NavLink to='/list-exams?subject=css'>CSS</NavLink>
								</li>
								<li>
									<NavLink to='/list-exams?subject=javascript'>
										Javascript
									</NavLink>
								</li>
								<li>
									<NavLink to='/list-exams?subject=reactjs'>ReactJS</NavLink>
								</li>
								<li>
									<NavLink to='/list-exams?subject=nodejs'>NodeJS</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to='/transcript'>Bảng điểm</NavLink>
						</li>

						<li>
							<NavLink to='/contact'>Liên hệ</NavLink>
						</li>
					</ul>
					<label htmlFor='menu-btn' className='btn menu-btn'>
						<i className='fas fa-bars' />
					</label>

					<div className='profile'>
						{/* Đã đăng nhập */}
						{/* <Dropdown menu={{ items }} placement='top'>
							<Avatar size='large' style={{ width: '55px', height: '55px' }}>
								D
							</Avatar>
						</Dropdown> */}
						{/* Chưa đăng nhập */}
						<>
							<Button
								onClick={handleClickButtonRegister}
								style={{ margin: '0px 8px' }}
							>
								Đăng ký
							</Button>
							<Button
								onClick={handleClickButtonLogin}
								style={{ margin: '0px 8px' }}
							>
								Đăng nhập
							</Button>
						</>
					</div>
				</div>
			</nav>
			<Modal
				title={statusModal === 'register' ? 'Đăng ký' : 'Đăng nhập'}
				open={isShowModal}
				okText={statusModal === 'register' ? 'Đăng ký' : 'Đăng nhập'}
				cancelText='Đóng lại'
				maskClosable={false}
				onOk={handleSubmit}
				onCancel={handleHideModal}
			>
				{statusModal === 'register' ? (
					<FormRegister />
				) : (
					<FormLogin onRegister={handleChangeStatusRegister} />
				)}
			</Modal>
		</>
	);
};

export default Navigation;
