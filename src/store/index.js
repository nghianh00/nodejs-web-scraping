import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./testSlice";

const store = configureStore({ reducer: { testSlice: testSlice.reducer } });

export default store;
