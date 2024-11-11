import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
	const params = useParams();
	const idStudent = params.id;

	const { data } = useQuery({
		queryKey: ['student', idStudent],
		queryFn: () =>
			axios.get(
				'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students/' +
					idStudent
			),
		gcTime: 60000,
		staleTime: 60000,
		refetchOnWindowFocus: true,
	});

	return <h1>Name: {data?.data?.name}</h1>;
};

export default StudentDetails;
