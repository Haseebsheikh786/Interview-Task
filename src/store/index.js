import { configureStore } from "@reduxjs/toolkit";
import callLogSlice from "./callLogSlice";

export const store = configureStore({
  reducer: {
    callLog: callLogSlice,
  },
});
