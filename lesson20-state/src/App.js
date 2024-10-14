import './App.css';
import DefaultPage from './layouts/DefaultPage';
import BlogPost from './BlogPost';
import { useState } from 'react';
import TrafficLight from './TrafficLight';

function App() {
	const listBlogPost = [
		{
			image: 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg',
			createdAt: 'January 1, 2023',
			title: 'Featured Post Title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
		},
		{
			image: 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
			createdAt: 'January 1, 2023',
			title: 'Post Title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.',
		},
		{
			image: 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
			createdAt: 'January 1, 2023',
			title: 'Post Title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.',
		},
		{
			image: 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
			createdAt: 'January 1, 2023',
			title: 'Post Title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.',
		},
		{
			image: 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
			createdAt: 'January 1, 2023',
			title: 'Post Title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.',
		},
	];
	let name = '';

	const handleMainClick = () => {
		handleClick('Huy');
	};

	const handleChangeName = (event) => {
		console.log('Sự kiện được gọi: ', event.target.value);
		name = event.target.value;
	};

	const handleClick = () => {
		console.log('Xin chào ', name);
	};

	const [count, setCount] = useState(1);
	const [student, setStudent] = useState({
		name: 'T3H',
		address: 'Hà Nội',
	});

	console.log('count: ', count);

	const handleDecrease = () => {
		setCount(count - 1);
		console.log('count: ', count);
	};

	const handleIncrease = () => {
		setCount(count + 1);
		console.log('count: ', count);
	};

	console.log('name: ', name);

	return (
		// <DefaultPage>
		// 	{/* Page content */}
		// 	<div className='container'>
		// 		<div className='row'>
		// 			{/* Blog entries*/}
		// 			<div className='col-lg-8'>
		// 				<div className='row'>
		// 					{listBlogPost.map((blogPost, index) => {
		// 						return (
		// 							<BlogPost
		// 								index={index}
		// 								title={blogPost.title}
		// 								image={blogPost.image}
		// 								description={blogPost.description}
		// 								createdAt={blogPost.createdAt}
		// 							/>
		// 						);
		// 					})}
		// 				</div>

		// 				{/* Pagination*/}
		// 				<nav aria-label='Pagination'>
		// 					<hr className='my-0' />
		// 					<ul className='pagination justify-content-center my-4'>
		// 						<li className='page-item disabled'>
		// 							<a
		// 								className='page-link'
		// 								href='#'
		// 								tabIndex={-1}
		// 								aria-disabled='true'
		// 							>
		// 								Newer
		// 							</a>
		// 						</li>
		// 						<li className='page-item active' aria-current='page'>
		// 							<a className='page-link' href='#!'>
		// 								1
		// 							</a>
		// 						</li>
		// 						<li className='page-item'>
		// 							<a className='page-link' href='#!'>
		// 								2
		// 							</a>
		// 						</li>
		// 						<li className='page-item'>
		// 							<a className='page-link' href='#!'>
		// 								3
		// 							</a>
		// 						</li>
		// 						<li className='page-item disabled'>
		// 							<a className='page-link' href='#!'>
		// 								...
		// 							</a>
		// 						</li>
		// 						<li className='page-item'>
		// 							<a className='page-link' href='#!'>
		// 								15
		// 							</a>
		// 						</li>
		// 						<li className='page-item'>
		// 							<a className='page-link' href='#!'>
		// 								Older
		// 							</a>
		// 						</li>
		// 					</ul>
		// 				</nav>
		// 			</div>
		// 			{/* Side widgets*/}
		// 			<div className='col-lg-4'>
		// 				{/* Search widget*/}
		// 				<div className='card mb-4'>
		// 					<div className='card-header'>Search</div>
		// 					<div className='card-body'>
		// 						<div className='input-group'>
		// 							<input
		// 								className='form-control'
		// 								type='text'
		// 								placeholder='Enter search term...'
		// 								aria-label='Enter search term...'
		// 								aria-describedby='button-search'
		// 							/>
		// 							<button
		// 								className='btn btn-primary'
		// 								id='button-search'
		// 								type='button'
		// 							>
		// 								Go!
		// 							</button>
		// 						</div>
		// 					</div>
		// 				</div>
		// 				{/* Categories widget*/}
		// 				<div className='card mb-4'>
		// 					<div className='card-header'>Categories</div>
		// 					<div className='card-body'>
		// 						<div className='row'>
		// 							<div className='col-sm-6'>
		// 								<ul className='list-unstyled mb-0'>
		// 									<li>
		// 										<a href='#!'>Web Design</a>
		// 									</li>
		// 									<li>
		// 										<a href='#!'>HTML</a>
		// 									</li>
		// 									<li>
		// 										<a href='#!'>Freebies</a>
		// 									</li>
		// 								</ul>
		// 							</div>
		// 							<div className='col-sm-6'>
		// 								<ul className='list-unstyled mb-0'>
		// 									<li>
		// 										<a href='#!'>JavaScript</a>
		// 									</li>
		// 									<li>
		// 										<a href='#!'>CSS</a>
		// 									</li>
		// 									<li>
		// 										<a href='#!'>Tutorials</a>
		// 									</li>
		// 								</ul>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 				{/* Side widget*/}
		// 				<div className='card mb-4'>
		// 					<div className='card-header'>Side Widget</div>
		// 					<div className='card-body'>
		// 						You can put anything you want inside of these side widgets. They
		// 						are easy to use, and feature the Bootstrap 5 card component!
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </DefaultPage>
		<div>
			{/* <button onClick={handleMainClick}>Click vào tôi</button> */}
			{/* <div>
				<label>Name</label>
				<input placeholder='Nhập tên của bạn' onChange={handleChangeName} />
			</div>
			<button onClick={handleClick}>Click vào tôi</button>
			<h1 onClick={handleClick}>Click vào tôi</h1>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<button onClick={handleDecrease}>Trừ</button>
				<h1 style={{ margin: '0px 12px' }}>Giá trị hiện tại là: {count}</h1>
				<button onClick={handleIncrease}>Cộng</button>
			</div> */}

			<TrafficLight />

			<h1>Địa chỉ là: {student.address}</h1>
			<button
				onClick={() => {
					const studentUpdate = { ...student };
					studentUpdate.address = 'Việt Nam';
					setStudent(studentUpdate);
				}}
			>
				Thay đổi địa chỉ
			</button>
		</div>
	);
}

export default App;
