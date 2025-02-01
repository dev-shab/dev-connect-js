import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequests: (_, action) => action.payload,
    removeRequests: () => [],
  },
});

export const { addRequests, removeRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
