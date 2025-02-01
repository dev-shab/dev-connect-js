import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (_, action) => action.payload,
    removeFeed: () => [],
  },
});

export const { addFeed } = feedSlice.actions;
export default feedSlice.reducer;
