import axios from 'axios';
import { useEffect, useState } from 'react';

const Students = () => {
	const [students, setStudents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchStudents = async () => {
		try {
			const response = await axios.get(
				'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students'
			);
			setStudents(response.data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchStudents();
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>Error: {error.message}</h1>;
	}
	return (
		<ul>
			{students.map((student) => (
				<li>{student.name}</li>
			))}
		</ul>
	);
};

export default Students;
