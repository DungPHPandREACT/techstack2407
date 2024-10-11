import PropTypes from 'prop-types';

const CardProduct = (props) => {
	// Cách 2: dùng destructuring
	const {
		productName = 'Product Name',
		isShowLabelSale = false,
		typeDisplayPrice = 3,
		price1,
		price2,
		isExistReview = false,
		contentButton = 'Add to cart',
	} = props;

	console.log(typeDisplayPrice);

	const renderPrice = () => {
		if (typeDisplayPrice === 1) {
			return (
				<span>
					{price1} - {price2}
				</span>
			);
		} else if (typeDisplayPrice === 2) {
			return (
				<span>
					<span className='text-muted text-decoration-line-through'>
						{price1}
					</span>{' '}
					{price2}
				</span>
			);
		} else {
			return <span>{price1}</span>;
		}
	};

	return (
		<div className='col mb-5'>
			<div className='card h-100'>
				{/* Sale badge*/}
				{isShowLabelSale ? (
					<div
						className='badge bg-dark text-white position-absolute'
						style={{ top: '0.5rem', right: '0.5rem' }}
					>
						Sale
					</div>
				) : (
					<></>
				)}

				{/* Product image*/}
				<img
					className='card-img-top'
					src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
					alt='...'
				/>
				{/* Product details*/}
				<div className='card-body p-4'>
					<div className='text-center'>
						{/* Product name*/}
						<h5 className='fw-bolder'>{productName}</h5>
						{/* Product reviews*/}
						{isExistReview ? (
							<div className='d-flex justify-content-center small text-warning mb-2'>
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
							</div>
						) : (
							''
						)}
						{/* Product price*/}
						{renderPrice()}
					</div>
				</div>
				{/* Product actions*/}
				<div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
					<div className='text-center'>
						<a className='btn btn-outline-dark mt-auto' href='#'>
							{contentButton}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

CardProduct.propTypes = {
	productName: PropTypes.string.isRequired,
};

// Cách 1: dùng default props
// CardProduct.defaultProps = {
// 	productName: 'Product Name'
// }

export default CardProduct;
