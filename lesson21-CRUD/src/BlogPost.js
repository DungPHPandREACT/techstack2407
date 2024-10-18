const BlogPost = (props) => {
	const { image, title, description, createdAt, index } = props;
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
					<a className='btn btn-primary' href='#!'>
						Read more →
					</a>
				</div>
			</div>
		</div>
	);
};

export default BlogPost;
