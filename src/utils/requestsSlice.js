import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequests: (_, action) => action.payload,
    removeRequest: (state, action) =>
      state.filter((request) => request._id !== action.payload),
  },
});

export const { addRequests, removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
