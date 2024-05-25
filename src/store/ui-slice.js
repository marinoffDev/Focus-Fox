import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { customizeModalVisible: false },
  reducers: {
    toggle(state) {
      state.customizeModalVisible = !state.customizeModalVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
