import { useNavigate, useSearchParams } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	// /?category=nodejs&page=3&limit=10
	console.log('category: ', searchParams.get('category'));
	console.log('page: ', searchParams.get('page'));
	console.log('limit: ', searchParams.get('limit'));

	const viewDetail = () => {
		alert('Logic được xử lý xong');

		navigate('/post');
	};

	const getDataPage = (page) => {
		console.log('page: ', page);
		setSearchParams({
			page: page,
		});
	};

	return (
		<header
			className='masthead'
			style={{ backgroundImage: 'url("assets/img/about-bg.jpg")' }}
		>
			<div className='container position-relative px-4 px-lg-5'>
				<div className='row gx-4 gx-lg-5 justify-content-center'>
					<div className='col-md-10 col-lg-8 col-xl-7'>
						<div className='page-heading'>
							<h1>About Me</h1>
							<button onClick={viewDetail}>Xem chi tiết</button>
							<button onClick={() => getDataPage(1)}>1</button>
							<button onClick={() => getDataPage(2)}>2</button>
							<button onClick={() => getDataPage(3)}>3</button>
							<span className='subheading'>This is what I do.</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
