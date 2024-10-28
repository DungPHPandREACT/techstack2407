import { useEffect } from 'react';

const ChildrenComponent = ({ age }) => {
	useEffect(() => {
		console.log('useEffect trong ChildrenComponent');

		return () => {
			console.log('useEffect trong ChildrenComponent phần return');
		};
	}, []);

	return <h1>{age}</h1>;
};

export default ChildrenComponent;
