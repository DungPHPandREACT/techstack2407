import React, { useState } from 'react';
import ComponentA from './ComponentA';
import DataContext from './contexts/DataContext';
import { NavLink, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import ProductContext from './contexts/ProductContext';

const App = () => {
	const scores = [10, 6, 7.25, 4, 8];
	const [cartProduct, setCardProduct] = useState([]);

	const valueContext = {
		cartProduct: cartProduct,
		onAddProduct: setCardProduct,
	};

	return (
		<>
			{/* <DataContext.Provider value={scores}>
				<h1>Đây là ComponentApp</h1>
				<ComponentA />
			</DataContext.Provider> */}
			<NavLink to='/product-list' style={{ margin: '10px' }}>
				Trang danh sách sản phẩm
			</NavLink>
			<NavLink to='/cart' style={{ margin: '10px' }}>
				Trang giỏ hàng
			</NavLink>
			<ProductContext.Provider value={valueContext}>
				<Routes>
					<Route path='/product-list' element={<ProductList />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</ProductContext.Provider>
		</>
	);
};

export default App;
