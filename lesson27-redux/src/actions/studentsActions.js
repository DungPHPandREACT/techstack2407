export const fetchDataRequest = () => {
	return {
		type: 'FETCH_DATA_REQUEST',
	};
};

export const fetchDataSuccess = (data) => {
	return {
		type: 'FETCH_DATA_SUCCESS',
		payload: data,
	};
};

export const fetchDataFailure = (error) => {
	return {
		type: 'FETCH_DATA_FAILURE',
		payload: error,
	};
};

export const fetchData = () => {
	return (dispatch) => {
		dispatch(fetchDataRequest());
		fetch('https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students')
			.then((response) => response.json())
			.then((data) => dispatch(fetchDataSuccess(data)))
			.catch((error) => dispatch(fetchDataFailure(error)));
	};
};
