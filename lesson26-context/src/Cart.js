import React, { useContext } from 'react';
import { Container, Table } from 'reactstrap';
import ProductContext from './contexts/ProductContext';

const Cart = () => {
	const { cartProduct } = useContext(ProductContext);

	return cartProduct.length === 0 ? (
		<h1>Giỏ hàng chưa có sản phẩm</h1>
	) : (
		<Container>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Description</th>
						<th>Count</th>
						<th>Price</th>
						<th>Total price</th>
					</tr>
				</thead>
				<tbody>
					{cartProduct.map((product) => (
						<tr>
							<th scope='row'>{product.id}</th>
							<td>{product.title}</td>
							<td>{product.description}</td>
							<td>{product.count}</td>
							<td>{product.price}</td>
							<td>{product.count * product.price}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default Cart;
