import React, { useContext } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
} from 'reactstrap';
import ProductContext from './contexts/ProductContext';

const ProductItem = ({ id, title, image, description, price }) => {
	const { cartProduct, onAddProduct } = useContext(ProductContext);
	const handleAddProductToCart = () => {
		const tempCartProduct = [...cartProduct];
		const newProduct = { id, title, image, description, price, count: 1 };

		const index = tempCartProduct.findIndex(
			(product) => product.id === newProduct.id
		);
		if (index !== -1) {
			tempCartProduct[index].count = tempCartProduct[index].count + 1;
		} else {
			tempCartProduct.push(newProduct);
		}

		onAddProduct(tempCartProduct);
	};

	return (
		<Card
			style={{
				width: '18rem',
			}}
		>
			<img alt='Sample' src={image} />
			<CardBody>
				<CardTitle tag='h5'>{title}</CardTitle>
				<CardSubtitle className='mb-2 text-muted' tag='h6'>
					{price} VND
				</CardSubtitle>
				<CardText>{description}</CardText>
				<Button onClick={handleAddProductToCart}>Add to cart</Button>
			</CardBody>
		</Card>
	);
};

export default ProductItem;
