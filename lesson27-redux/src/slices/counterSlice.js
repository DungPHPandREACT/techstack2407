import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchStudentValue = createAsyncThunk(
	'counter/fetchValue',
	async () => {
		const response = await fetch(
			'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students'
		);

		return response.json();
	}
);

const counterSlice = createSlice({
	name: 'counter',
	initialState: { count: 0, data: [], status: 'idle', error: null },
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		incrementByAmount: (state, action) => {
			state.count += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchStudentValue.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchStudentValue.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchStudentValue.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
