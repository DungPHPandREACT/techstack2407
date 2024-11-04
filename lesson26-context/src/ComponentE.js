import React, { useContext } from 'react';
import DataContext from './contexts/DataContext';

const ComponentE = () => {
	const data = useContext(DataContext);
	console.log(data);

	return <h1>ComponentE</h1>;
};

export default ComponentE;
