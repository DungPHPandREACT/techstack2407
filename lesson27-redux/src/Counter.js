import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions/counterActions';

const Counter = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment(7));
	};

	const handleDecrement = () => {
		dispatch(decrement(3));
	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrement}>Tăng</button>
			<button onClick={handleDecrement}>Giảm</button>
		</div>
	);
};

export default Counter;
