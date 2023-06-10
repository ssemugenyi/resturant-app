import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  restaurants: [],
  isFetching: false,
  error: "",
};
const fetchRestuarantsSlice = createSlice({
  name: "fetchRestuarant",
  initialState,
  reducers: {
    fetchIsPending: (state) => {
      state.isFetching = true;
    },
    fetchSuccess: (state, action) => {
      state.isFetching = false;
      state.restaurants = action.payload;
    },
    fetchFail: (state, { payload }) => {
      state.isFetching = false;
      state.error = payload.status;
    },
  },
});

export const { fetchFail, fetchIsPending, fetchSuccess } =
  fetchRestuarantsSlice.actions;
export default fetchRestuarantsSlice.reducer;
