import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const StudentsQuery = () => {
	const queryClient = useQueryClient();

	const [name, setName] = useState('');
	const fetchStudents = async () => {
		return axios.get(
			'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students'
		);
	};

	const addStudent = (newStudent) => {
		return axios.post(
			'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students',
			newStudent
		);
	};

	const query = useQuery({
		queryKey: ['students'],
		queryFn: fetchStudents,
		staleTime: 1000,
		gcTime: 1000,
	});

	const mutation = useMutation({
		mutationFn: addStudent,
		onSuccess: () => {
			alert('Thêm mới học sinh thành công');
			queryClient.invalidateQueries({ queryKey: ['students'] });
		},
	});

	const { data, error, isLoading } = query;

	const handleChangeName = (event) => {
		setName(event.target.value);
	};

	const handleAddStudent = () => {
		const newStudent = {
			name,
		};

		console.log(newStudent);
		mutation.mutate(newStudent);
	};

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>Error: {error.message}</h1>;
	}
	return (
		<div style={{ display: 'flex' }}>
			<ul>
				{data.data.map((student) => (
					<li>{student.name}</li>
				))}
			</ul>
			<div>
				<input type='text' onChange={handleChangeName} />
				<button onClick={handleAddStudent}>Thêm mới học sinh</button>
			</div>
		</div>
	);
};

export default StudentsQuery;
