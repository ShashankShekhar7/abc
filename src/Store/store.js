import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice for the counter
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Create and export the store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
