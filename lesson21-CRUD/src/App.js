import './App.css';
import DefaultPage from './layouts/DefaultPage';
import BlogPost from './BlogPost';
import { useState } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Row,
	Col,
	Label,
	Input,
} from 'reactstrap';

function App() {
	const [isShowModal, setIsShowModal] = useState(false);
	const [blogPost, setBlogPost] = useState({});

	const [listBlogPost, setListBlogPost] = useState([
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
	]);

	const categories = [
		{
			value: 'nodejs',
			label: 'NodeJS',
		},
		{
			value: 'reactjs',
			label: 'ReactJS',
		},
		{
			value: 'html',
			label: 'HTML',
		},
		{
			value: 'css',
			label: 'CSS',
		},
		{
			value: 'javascript',
			label: 'Javascript',
		},
	];

	const handleShowModal = () => {
		setIsShowModal(true);
	};

	const handleCloseModal = () => {
		setIsShowModal(false);
	};

	// const handleChangeTitle = (event) => {
	// 	const blogPostTemp = { ...blogPost };
	// 	blogPostTemp.title = event.target.value;
	// 	setBlogPost(blogPostTemp);
	// };

	// const handleChangeDescription = (event) => {
	// 	const blogPostTemp = { ...blogPost };
	// 	blogPostTemp.description = event.target.value;
	// 	setBlogPost(blogPostTemp);
	// };

	// const handleChangeCategory = (event) => {
	// 	console.log(event.target.value);
	// 	const blogPostTemp = { ...blogPost };
	// 	blogPostTemp.category = event.target.value;
	// 	setBlogPost(blogPostTemp);
	// };

	// const handleChangeImage = (event) => {
	// 	console.log(event.target.value);
	// 	const blogPostTemp = { ...blogPost };
	// 	blogPostTemp.image = event.target.value;
	// 	setBlogPost(blogPostTemp);
	// };

	const handleChange = (event) => {
		// const key = event.target.name;
		// const value = event.target.value;

		const blogPostTemp = { ...blogPost };
		blogPostTemp[event.target.name] = event.target.value;

		setBlogPost(blogPostTemp);
	};

	const handleCreateBlogPost = () => {
		const newListBlogPost = [...listBlogPost, blogPost];
		setListBlogPost(newListBlogPost);

		// Reset input
		setBlogPost({});
		handleCloseModal();
	};

	return (
		<DefaultPage>
			<Modal isOpen={isShowModal} toggle={handleCloseModal} fullscreen={true}>
				<ModalHeader toggle={handleCloseModal}>Thêm mới bài viết</ModalHeader>
				<ModalBody>
					<Row className='justify-content-center'>
						<Col md={5}>
							<Label>Tiêu đề bài viết</Label>
							<Input
								name='title'
								placeholder='Nhập tiêu đề bài viết'
								type='text'
								onChange={handleChange}
							/>
						</Col>
						<Col md={5}>
							<Label>Danh mục bài viết</Label>
							<Input name='category' type='select' onChange={handleChange}>
								{categories.map((category) => (
									<option value={category.value}>{category.label}</option>
								))}
							</Input>
						</Col>
						<Col md={10}>
							<Label>Thông tin bài viết</Label>
							<Input
								name='description'
								type='textarea'
								onChange={handleChange}
							/>
						</Col>
						<Col md={10}>
							<Label>Ảnh liên quan</Label>
							<Input name='image' type='text' onChange={handleChange} />
						</Col>
					</Row>
				</ModalBody>
				<ModalFooter>
					<Button color='danger' onClick={handleCloseModal}>
						Hủy
					</Button>
					<Button color='primary' onClick={handleCreateBlogPost}>
						Thêm mới
					</Button>
				</ModalFooter>
			</Modal>
			{/* Page content */}
			<div className='container'>
				<div className='row'>
					{/* Blog entries*/}
					<div className='col-lg-8'>
						<div className='row'>
							{listBlogPost.map((blogPost, index) => {
								return (
									<BlogPost
										index={index}
										title={blogPost.title}
										image={blogPost.image}
										description={blogPost.description}
										createdAt={blogPost.createdAt}
									/>
								);
							})}
						</div>

						{/* Pagination*/}
						<nav aria-label='Pagination'>
							<hr className='my-0' />
							<ul className='pagination justify-content-center my-4'>
								<li className='page-item disabled'>
									<a
										className='page-link'
										href='#'
										tabIndex={-1}
										aria-disabled='true'
									>
										Newer
									</a>
								</li>
								<li className='page-item active' aria-current='page'>
									<a className='page-link' href='#!'>
										1
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#!'>
										2
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#!'>
										3
									</a>
								</li>
								<li className='page-item disabled'>
									<a className='page-link' href='#!'>
										...
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#!'>
										15
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#!'>
										Older
									</a>
								</li>
							</ul>
						</nav>
					</div>
					{/* Side widgets*/}
					<div className='col-lg-4'>
						{/* Search widget*/}
						<div className='card mb-4'>
							<div className='card-header'>Search</div>
							<div className='card-body'>
								<div className='input-group'>
									<input
										className='form-control'
										type='text'
										placeholder='Enter search term...'
										aria-label='Enter search term...'
										aria-describedby='button-search'
									/>
									<button
										className='btn btn-primary'
										id='button-search'
										type='button'
									>
										Go!
									</button>
								</div>
							</div>
						</div>
						{/* Categories widget*/}
						<div className='card mb-4'>
							<div className='card-header d-flex justify-content-between align-items-center'>
								<div>Categories</div>
								<Button color='link'>Add category</Button>
							</div>
							<div className='card-body'>
								<div className='row'>
									{categories.map((category) => (
										<div className='col-lg-6'>
											<Button color='link'>{category.label}</Button>
										</div>
									))}
								</div>
							</div>
						</div>
						{/* Side widget*/}
						<div className='card mb-4'>
							<div className='card-header'>Actions</div>
							<div className='card-body'>
								<Button
									onClick={handleShowModal}
									color='primary'
									outline
									size='sm'
								>
									Add blog post
								</Button>

								<Button color='secondary' className='mx-2' outline size='sm'>
									Actions others
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DefaultPage>
	);
}

export default App;
