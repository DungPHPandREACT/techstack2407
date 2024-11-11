import { QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const StudentsQuery = () => {
	const queryClient = new QueryClient();
	const fetchStudents = async () => {
		return axios.get(
			'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students'
		);
	};

	const query = useQuery({
		queryKey: ['students'],
		queryFn: fetchStudents,
		staleTime: 10000,
		gcTime: 10000,
		refetchOnWindowFocus: true,
	});

	const { data, error, isLoading } = query;

	const handlePrefetchingStudentDetail = (id) => {
		queryClient.prefetchQuery({
			queryKey: ['student', id],
			queryFn: () =>
				axios.get(
					`https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students/${id}`
				),
			gcTime: 60000,
			staleTime: 60000,
		});
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
					<li onMouseEnter={() => handlePrefetchingStudentDetail(student.id)}>
						<NavLink to={`/student-query/${student.id}`}>
							{student.name}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default StudentsQuery;
