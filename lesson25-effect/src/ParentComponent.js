import { useState, useEffect } from 'react';
import ChildrenComponent from './ChildrenComponent';

const ParentComponent = () => {
	const [age1, setAge1] = useState(18);
	const [age2, setAge2] = useState(18);
	const [showNumber, setShowNumber] = useState(false);
	const [listStudent, setListStudent] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleToggleShowNumber = () => {
		setShowNumber(!showNumber);
	};

	const handleIncrease1 = () => {
		setAge1(age1 + 1);
	};
	const handleDecrease1 = () => {
		setAge1(age1 - 1);
	};
	const handleIncrease2 = () => {
		setAge2(age2 + 1);
	};
	const handleDecrease2 = () => {
		setAge2(age2 - 1);
	};

	// useEffect được chạy sau khi component render xong
	// Trường hợp 1: useEffect không có dependencies
	// callback trong useEffect sẽ được chạy sau mỗi lần render
	useEffect(() => {
		console.log('useEffect không có dependencies');
	});
	// Trường hợp 2: useEffect có dependencies là 1 mảng rỗng ([])
	// callback trong useEffect sẽ được chạy duy nhất 1 lần sau lần render đầu tiên
	useEffect(() => {
		console.log('useEffect có dependencies là []');
	}, []);
	// Trường hợp 3: useEffect có dependencies là 1 mảng chứa các phần tử
	// callback sẽ được chạy lại khi mà 1 trong số các phần tử trong mảng dependencies có sự thay đổi
	useEffect(() => {
		console.log('useEffect có dependencies là [age1]');
	}, [age1]);

	const fetchData = async () => {
		try {
			const response = await fetch(
				'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students'
			);
			const data = await response.json();
			setListStudent(data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<h1 id='title'>Đây là tiêu đề</h1>
			<div>
				<button onClick={handleToggleShowNumber}>Show ChildrenComponent</button>
			</div>

			{showNumber && <ChildrenComponent age={age1} />}

			<button onClick={handleIncrease1}>Tăng</button>
			<button onClick={handleDecrease1}>Giảm</button>
			{/* <ChildrenComponent age={age2} />
			<button onClick={handleIncrease2}>Tăng</button>
			<button onClick={handleDecrease2}>Giảm</button> */}

			<h1>Danh sách tên các bạn học sinh</h1>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				listStudent.map((student) => {
					return <h1>{student.name}</h1>;
				})
			)}
		</div>
	);
};

export default ParentComponent;
