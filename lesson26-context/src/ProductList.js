import React from 'react';
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
	Col,
	Container,
	Row,
} from 'reactstrap';
import ProductItem from './ProductItem';

const ProductList = () => {
	const listProduct = [
		{
			id: 1,
			title: 'Sản phẩm 1',
			price: 10000,
			description: 'Đây là mô tả sản phẩm 1',
			image: 'https://picsum.photos/300/200',
		},
		{
			id: 2,
			title: 'Sản phẩm 2',
			price: 20000,
			description: 'Đây là mô tả sản phẩm 2',
			image: 'https://picsum.photos/300/200',
		},
		{
			id: 3,
			title: 'Sản phẩm 3',
			price: 30000,
			description: 'Đây là mô tả sản phẩm 3',
			image: 'https://picsum.photos/300/200',
		},
		{
			id: 4,
			title: 'Sản phẩm 4',
			price: 40000,
			description: 'Đây là mô tả sản phẩm 4',
			image: 'https://picsum.photos/300/200',
		},
		{
			id: 5,
			title: 'Sản phẩm 5',
			price: 50000,
			description: 'Đây là mô tả sản phẩm 5',
			image: 'https://picsum.photos/300/200',
		},
	];

	return (
		<Container>
			<Row>
				{listProduct.map((product) => (
					<Col xs={4} style={{ padding: '12px' }}>
						<ProductItem
							id={product.id}
							title={product.title}
							image={product.image}
							description={product.description}
							price={product.price}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ProductList;
