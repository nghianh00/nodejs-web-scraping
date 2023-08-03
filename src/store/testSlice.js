import { createSlice } from "@reduxjs/toolkit";

const initial = { toggle: false };

const testSlice = createSlice({
  name: "buttonToggle",
  initialState: initial,
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const testSliceActions = testSlice.actions;

export default testSlice;
