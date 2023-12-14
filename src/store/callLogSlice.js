import { createSlice } from "@reduxjs/toolkit";

const callLogSlice = createSlice({
  name: "callLog",
  initialState: {
    dialedNumber: "",
    log: [],
  },
  reducers: {
    initiateCall: (state, action) => {
      state.dialedNumber = action.payload;
    },
    endCall: (state) => {
      state.log.push({ dialedNumber: state.dialedNumber });
      state.dialedNumber = "";
    },
    deleteCallLog: (state, action) => {
      state.log.splice(action.payload, 1);
    },
  },
});

export const { initiateCall, endCall, deleteCallLog } = callLogSlice.actions;
export default callLogSlice.reducer;
