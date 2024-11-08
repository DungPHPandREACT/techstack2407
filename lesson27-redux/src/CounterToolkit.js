import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './slices/counterSlice';

const CounterToolkit = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleIncrementByAmount = () => {
		dispatch(incrementByAmount(5));
	};

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
