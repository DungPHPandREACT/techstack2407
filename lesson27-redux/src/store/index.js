import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';

// Initial state
const initialStudent = {
	loading: false,
	data: [],
	error: '',
};

const initialCount = 0;

// Reducer students
const studentsReducer = (state = initialStudent, action) => {
	switch (action.type) {
		case 'FETCH_DATA_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_DATA_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case 'FETCH_DATA_FAILURE':
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

// Reducer function
const counterReducer = (state = initialCount, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + action.payload;
		case 'DECREMENT':
			return state - action.payload;
		default:
			return state;
	}
};

// Tạo store từ reducer
// combineReducers
const rootReducer = combineReducers({
	count: counterReducer,
	students: studentsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
