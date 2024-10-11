import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './App.css';
import Product from './components/CardProduct';
import DefaultLayout from './layouts/DefaultLayout';

const App = () => {
	// typeDisplayPrice
	// typeDisplayPrice = 1 => $40.00 - $80.00
	// typeDisplayPrice = 2 => $20.00 $18.00
	// typeDisplayPrice = 3 => $40.00
	const listProduct = [
		{
			name: 'Fancy Product',
			typeDisplayPrice: 1,
			price1: '$40.00',
			price2: '$80.00',
			contentButton: 'View options',
		},
		{
			name: 'Special Item',
			isShowLabelSale: true,
			typeDisplayPrice: 2,
			price1: '$20.00',
			price2: '$18.00',
			isExistReview: true,
		},
		{
			name: 'Sale Item',
			isShowLabelSale: true,
			typeDisplayPrice: 2,
			price1: '$50.00',
			price2: '$25.00',
		},
		{
			name: 'Popular Item',
			typeDisplayPrice: 3,
			price1: '$40.00',
			isExistReview: true,
		},
		{
			name: 'Sale Item',
			isShowLabelSale: true,
			typeDisplayPrice: 2,
			price1: '$50.00',
			price2: '$25.00',
		},
		{
			name: 'Fancy Product',
			typeDisplayPrice: 1,
			price1: '$120.00',
			price2: '$280.00',
			contentButton: 'View options',
		},
		{
			name: 'Special Item',
			isShowLabelSale: true,
			typeDisplayPrice: 2,
			price1: '$20.00',
			price2: '$18.00',
			isExistReview: true,
		},
		{
			name: 'Popular Item',
			typeDisplayPrice: 3,
			price1: '$40.00',
			isExistReview: true,
		},
	];

	return (
		<DefaultLayout>
			<section className='py-5'>
				<div className='container px-4 px-lg-5 mt-5'>
					<div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
						{/* <Product productName='Fancy Product' />
						<Product productName='Special Item' isShowLabelSale={true} />
						<Product productName='Sale Item' isShowLabelSale={true} />
						<Product productName='Popular Item' />
						<Product productName='Sale Item' isShowLabelSale={true}></Product>
						<Product productName='Fancy Product' />
						<Product productName='Special Item' isShowLabelSale={true} />
						<Product productName='Popular Item' /> */}
						{listProduct.map((product) => {
							return (
								<Product
									productName={product.name}
									isShowLabelSale={product.isShowLabelSale}
									typeDisplayPrice={product.typeDisplayPrice}
									price1={product.price1}
									price2={product.price2}
									isExistReview={product.isExistReview}
									contentButton={product.contentButton}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
};

export default App;
