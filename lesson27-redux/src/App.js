import React from 'react';
import Counter from './Counter';
import Students from './Students';
import CounterToolkit from './CounterToolkit';

const App = () => {
	return (
		<>
			{/* Redux truyền thống */}
			{/* <Counter /> */}
			{/* <Students /> */}

			{/* Redux toolkit */}
			<CounterToolkit />
		</>
	);
};

export default App;
