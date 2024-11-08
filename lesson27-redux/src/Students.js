import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/studentsActions';

const Students = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => {
		console.log(state);
		return state.students.data;
	});
	const loading = useSelector((state) => state.students.loading);
	const error = useSelector((state) => state.students.error);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	if (loading) {
		return <h1>Loading....</h1>;
	}

	if (error) {
		return <h1>Error: {error}</h1>;
	}

	return (
		<div>
			<h1>Data</h1>
			<ul>
				{data.map((student) => {
					return <li>{student.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default Students;
