import { createSlice } from "@reduxjs/toolkit";

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: { data: null },
  reducers: {
    addHeroes: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addHeroes } = heroesSlice.actions;
export default heroesSlice.reducer;
