import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movieLists",
  initialState: { data: [] },
  reducers: {
    Add: (state, action) => {
      state.data.push(action.payload);
    },
    Remove: (state, action) => {
      state.data = state.data.filter((movie) => movie.id !== action.payload.id);
    },
  },
});

export const { Add, Remove } = movieSlice.actions;

export default movieSlice.reducer;
