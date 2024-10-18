import {
	Button,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	UncontrolledDropdown,
} from 'reactstrap';

const BlogPost = (props) => {
	const {
		image,
		title,
		description,
		createdAt,
		index,
		id,
		onDelete,
		onUpdate,
	} = props;

	const deleteBlogPost = () => {
		console.log('Deleted');
		onDelete(id);
	};

	const updateBlogPost = () => {
		console.log('Updated');
		onUpdate(id);
	};

	return (
		<div className={index === 0 ? 'col-lg-12' : 'col-lg-6'}>
			{/* Featured blog post*/}
			<div className='card mb-4'>
				<a href='#!'>
					<img className='card-img-top' src={image} alt='...' />
				</a>
				<div className='card-body'>
					<div className='small text-muted'>{createdAt}</div>
					<h2 className={`card-title ${index === 0 ? '' : 'h4'}`}>{title}</h2>
					<p className='card-text'>{description}</p>
					<div className='d-flex justify-content-between align-items-center'>
						<a className='btn btn-primary' href='#!'>
							Read more →
						</a>

						<UncontrolledDropdown group>
							<Button color='secondary'>Actions</Button>
							<DropdownToggle caret color='secondary' />
							<DropdownMenu>
								<DropdownItem onClick={updateBlogPost}>Cập nhật</DropdownItem>
								<DropdownItem divider />
								<DropdownItem onClick={deleteBlogPost}>Xóa</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPost;
