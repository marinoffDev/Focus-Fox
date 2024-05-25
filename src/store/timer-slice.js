import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: { timerIsRunning: false },
  reducers: {
    toggle(state) {
      state.timerIsRunning = !state.timerIsRunning;
    },
  },
});

export const timerActions = timerSlice.actions;

export default timerSlice;
