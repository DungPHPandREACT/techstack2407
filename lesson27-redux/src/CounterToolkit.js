import { useDispatch, useSelector } from 'react-redux';
import {
	decrement,
	fetchStudentValue,
	increment,
	incrementByAmount,
} from './slices/counterSlice';
import { useEffect } from 'react';

const CounterToolkit = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const data = useSelector((state) => state.counter.data);
	const status = useSelector((state) => state.counter.status);
	const error = useSelector((state) => state.counter.error);

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleIncrementByAmount = () => {
		dispatch(incrementByAmount(5));
	};

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchStudentValue());
		}
	}, [status, dispatch]);

	console.log('data: ', data);
	console.log('status: ', status);
	console.log('error: ', error);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrement}>Tăng</button>
			<button onClick={handleIncrementByAmount}>Tăng 5 giá trị</button>
			<button onClick={handleDecrement}>Giảm</button>
		</div>
	);
};

export default CounterToolkit;
