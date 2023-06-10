import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  status: "",
  message: "",
};
const newRestuarantSlice = createSlice({
  name: "newRestaurant",
  initialState,
  reducers: {
    newRestuarantPending: (state) => {
      state.isLoading = true;
    },
    newRestuarantSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    newResturantFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

export const { newRestuarantPending, newRestuarantSuccess, newResturantFail } =
  newRestuarantSlice.actions;
export default newRestuarantSlice.reducer;
export const selectNewIsLoading = (state) => state.createNewResturant.isLoading;
