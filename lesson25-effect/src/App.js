import { useCallback, useMemo, useState } from 'react';
import RenderName from './RenderName';
import RenderAge from './RenderAge';

const App = () => {
	const [name, setName] = useState('Nguyễn Văn A');
	const [age, setAge] = useState(20);

	const logName = useCallback(() => {
		console.log('Tên của bạn là: ', name);
	}, [name]);

	// const ageVariable = age;
	const ageVariable = useMemo(() => {
		return age;
	}, [name]);
	// useMemo(callback, dependencies)

	console.log('ageVariable: ', ageVariable);
	console.log('age: ', age);

	const changeName = () => {
		setName('Trần Thị B');
	};

	const changeAge = () => {
		setAge(age + 1);
	};

	return (
		<div>
			<RenderName name={name} />
			<RenderAge age={ageVariable} />
			<button onClick={changeName}>Đổi tên</button>
			<button onClick={changeAge}>Tăng tuổi</button>
			<button onClick={logName}>In tên</button>
		</div>
	);
};

export default App;
