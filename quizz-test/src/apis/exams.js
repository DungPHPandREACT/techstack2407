import axios from 'axios';
import { BASE_URL } from '../constants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const URL = {
	get: `${BASE_URL}/exams`,
	post: `${BASE_URL}/exams`,
};

const fetchExams = () => {
	return axios.get(URL.get);
};

const createExam = (newExam) => {
	return axios.post(URL.post, newExam);
};

export const useGetExams = () => {
	return useQuery({
		queryKey: ['exams'],
		queryFn: fetchExams,
		select: (data) => data.data,
	});
};

export const useCreateExam = ({ callbackSuccess, callbackError }) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createExam,
		onSuccess: (data) => {
			queryClient.invalidateQueries(['exams']);
			callbackSuccess(data);
		},
		onError: (err) => {
			callbackError();
		},
	});
};
