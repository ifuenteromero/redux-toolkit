import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incremented(state) {
			state.value++;
		},
		amountAdded(state, { payload }: PayloadAction<number>) {
			state.value += payload;
		},
	},
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
