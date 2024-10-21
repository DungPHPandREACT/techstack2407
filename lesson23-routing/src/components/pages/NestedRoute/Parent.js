import React from 'react';
import { Outlet } from 'react-router-dom';

const Parent = () => {
	return (
		<div>
			<h1>Parent</h1>
			<hr />

			<Outlet />
		</div>
	);
};

export default Parent;
