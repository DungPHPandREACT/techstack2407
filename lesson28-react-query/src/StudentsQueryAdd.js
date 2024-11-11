import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

const StudentsQueryAdd = () => {
	const queryClient = useQueryClient();

	const [name, setName] = useState('');

	const addStudent = (newStudent) => {
		return axios.post(
			'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students',
			newStudent
		);
	};

	const mutation = useMutation({
		mutationFn: addStudent,
		onSuccess: () => {
			alert('Thêm mới học sinh thành công');
			queryClient.invalidateQueries({ queryKey: ['students'] });
		},
	});

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
	return (
		<div>
			<input type='text' onChange={handleChangeName} />
			<button onClick={handleAddStudent}>Thêm mới học sinh</button>
		</div>
	);
};

export default StudentsQueryAdd;
